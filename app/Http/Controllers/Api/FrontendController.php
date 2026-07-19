<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Department;
use App\Models\User;
use App\Models\Patient;
use App\Models\Appointment;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class FrontendController extends Controller
{
    public function departments()
    {
        $departments = Department::where('is_active', true)->get(['id', 'name']);
        return response()->json($departments);
    }

    public function bookAppointment(Request $request)
    {
        $validated = $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'date' => 'required|date',
            'time' => 'required',
            'department' => 'required|exists:departments,id',
            'message' => 'nullable|string',
        ]);

        try {
            DB::beginTransaction();

            $user = User::where('email', $validated['email'])->first();

            if (!$user) {
                $user = User::create([
                    'name' => $validated['firstName'] . ' ' . $validated['lastName'],
                    'email' => $validated['email'],
                    'password' => Hash::make(Str::random(16)),
                    'phone' => $validated['phone'],
                ]);
            }

            $patient = Patient::firstOrCreate(
                ['user_id' => $user->id],
                [
                    'first_name' => $validated['firstName'],
                    'last_name' => $validated['lastName'],
                    'patient_code' => 'PT-' . strtoupper(Str::random(6)),
                    'dob' => '2000-01-01', // Default DOB as form doesn't have it
                    'gender' => 'Other', // Default Gender
                ]
            );

            $doctor = \App\Models\Doctor::where('department_id', $validated['department'])->first();
            
            if (!$doctor) {
                throw new \Exception('No doctors available in the selected department.');
            }

            $appointment = Appointment::create([
                'patient_id' => $patient->id,
                'doctor_id' => $doctor->id,
                'department_id' => $validated['department'],
                'appointment_date' => $validated['date'],
                'time_slot' => $validated['time'],
                'status' => 'Pending',
                'reason_for_visit' => $validated['message'],
            ]);

            DB::commit();

            return response()->json([
                'message' => 'Appointment request submitted successfully!',
                'appointment' => $appointment
            ], 201);
            
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Failed to book appointment', 'error' => $e->getMessage()], 500);
        }
    }
}
