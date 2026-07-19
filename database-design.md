# RoseCare General Hospital - Database Design & Architecture

Based on the modules available in the backend admin panel and the frontend website, here is the comprehensive database structure for the RoseCare Hospital Management System.

## 1. Authentication & Authorization
Core tables for managing access across the platform.

### `users`
- `id` (PK, BigInt)
- `name` (String)
- `email` (String, Unique)
- `password` (String)
- `role_id` (FK -> roles.id)
- `phone` (String, Nullable)
- `avatar` (String, Nullable)
- `is_active` (Boolean, Default: true)
- `timestamps`

### `roles`
- `id` (PK, BigInt)
- `name` (String) - e.g., Admin, Doctor, Patient, Receptionist, Pharmacist, Lab Technician
- `description` (String, Nullable)
- `timestamps`

---

## 2. Hospital Core Modules

### `departments`
- `id` (PK, BigInt)
- `name` (String) - e.g., Cardiology, Neurology
- `description` (Text)
- `head_doctor_id` (FK -> doctors.id, Nullable)
- `is_active` (Boolean)
- `timestamps`

### `specializations`
- `id` (PK, BigInt)
- `name` (String)
- `description` (Text, Nullable)
- `timestamps`

### `doctors`
- `id` (PK, BigInt)
- `user_id` (FK -> users.id)
- `department_id` (FK -> departments.id)
- `specialization_id` (FK -> specializations.id)
- `designation` (String)
- `experience_years` (Int)
- `fee` (Decimal)
- `bio` (Text)
- `profile_image` (String, Nullable) - Professional photo
- `facebook_url` (String, Nullable)
- `linkedin_url` (String, Nullable)
- `instagram_url` (String, Nullable)
- `timestamps`

### `doctor_schedules`
- `id` (PK, BigInt)
- `doctor_id` (FK -> doctors.id)
- `day_of_week` (Enum: Monday - Sunday)
- `start_time` (Time)
- `end_time` (Time)
- `slot_duration_minutes` (Int, Default: 30)
- `timestamps`

---

## 3. Patient Management

### `patients`
- `id` (PK, BigInt)
- `user_id` (FK -> users.id, Nullable) - If patient has a login
- `patient_code` (String, Unique) - e.g., RC-PAT-1001
- `first_name` (String)
- `last_name` (String)
- `dob` (Date)
- `gender` (Enum: Male, Female, Other)
- `blood_group` (Enum: A+, A-, B+, B-, O+, O-, AB+, AB-)
- `address` (Text)
- `profile_image` (String, Nullable) - Patient photo
- `emergency_contact_name` (String)
- `emergency_contact_phone` (String)
- `timestamps`

### `appointments`
- `id` (PK, BigInt)
- `patient_id` (FK -> patients.id)
- `doctor_id` (FK -> doctors.id)
- `department_id` (FK -> departments.id)
- `appointment_date` (Date)
- `time_slot` (Time)
- `status` (Enum: Pending, Confirmed, Completed, Cancelled)
- `reason_for_visit` (Text)
- `notes` (Text, Nullable)
- `timestamps`

---

## 4. Inpatient & Bed Management

### `bed_categories`
- `id` (PK, BigInt)
- `name` (String) - e.g., General Ward, ICU, VIP Cabin
- `description` (Text)
- `price_per_day` (Decimal)
- `timestamps`

### `beds`
- `id` (PK, BigInt)
- `bed_category_id` (FK -> bed_categories.id)
- `room_number` (String)
- `bed_number` (String)
- `status` (Enum: Available, Occupied, Maintenance)
- `timestamps`

### `admissions` (Inpatient Records)
- `id` (PK, BigInt)
- `patient_id` (FK -> patients.id)
- `bed_id` (FK -> beds.id)
- `admitting_doctor_id` (FK -> doctors.id)
- `admission_date` (DateTime)
- `discharge_date` (DateTime, Nullable)
- `status` (Enum: Admitted, Discharged)
- `reason` (Text)
- `timestamps`

---

## 5. Billing & Finance

### `invoices`
- `id` (PK, BigInt)
- `invoice_number` (String, Unique)
- `patient_id` (FK -> patients.id)
- `appointment_id` (FK -> appointments.id, Nullable)
- `admission_id` (FK -> admissions.id, Nullable)
- `subtotal` (Decimal)
- `tax_amount` (Decimal)
- `discount` (Decimal)
- `total_amount` (Decimal)
- `paid_amount` (Decimal)
- `status` (Enum: Unpaid, Partial, Paid)
- `payment_method` (Enum: Cash, Card, Mobile Banking)
- `due_date` (Date)
- `timestamps`

### `invoice_items`
- `id` (PK, BigInt)
- `invoice_id` (FK -> invoices.id)
- `description` (String)
- `quantity` (Int)
- `unit_price` (Decimal)
- `total` (Decimal)
- `timestamps`

---

## 6. Pharmacy & Prescriptions

### `medicines`
- `id` (PK, BigInt)
- `name` (String)
- `generic_name` (String)
- `category` (String) - e.g., Tablet, Syrup, Injection
- `manufacturer` (String)
- `stock_quantity` (Int)
- `unit_price` (Decimal)
- `expiry_date` (Date)
- `timestamps`

### `prescriptions`
- `id` (PK, BigInt)
- `appointment_id` (FK -> appointments.id)
- `patient_id` (FK -> patients.id)
- `doctor_id` (FK -> doctors.id)
- `symptoms` (Text)
- `diagnosis` (Text)
- `notes` (Text)
- `date` (Date)
- `timestamps`

### `prescription_items`
- `id` (PK, BigInt)
- `prescription_id` (FK -> prescriptions.id)
- `medicine_id` (FK -> medicines.id)
- `dosage` (String) - e.g., 1-0-1
- `duration_days` (Int)
- `instructions` (String)
- `timestamps`

---

## 7. Laboratory & Diagnostics

### `lab_tests`
- `id` (PK, BigInt)
- `name` (String)
- `category` (String) - e.g., Blood Test, X-Ray, MRI
- `price` (Decimal)
- `description` (Text)
- `timestamps`

### `lab_reports`
- `id` (PK, BigInt)
- `patient_id` (FK -> patients.id)
- `doctor_id` (FK -> doctors.id)
- `test_id` (FK -> lab_tests.id)
- `result_data` (Text/JSON)
- `document_path` (String, Nullable) - PDF upload
- `status` (Enum: Pending, Completed)
- `report_date` (DateTime, Nullable)
- `timestamps`

---

## 8. Blood Bank

### `blood_inventory`
- `id` (PK, BigInt)
- `blood_group` (Enum: A+, A-, B+, B-, O+, O-, AB+, AB-)
- `bags_available` (Int)
- `last_updated` (DateTime)
- `timestamps`

### `blood_donors`
- `id` (PK, BigInt)
- `name` (String)
- `blood_group` (Enum)
- `age` (Int)
- `phone` (String)
- `address` (Text)
- `last_donation_date` (Date, Nullable)
- `timestamps`

---

## 9. Human Resources (HR)

### `employees`
- `id` (PK, BigInt)
- `user_id` (FK -> users.id, Nullable)
- `department_id` (FK -> departments.id)
- `employee_code` (String, Unique)
- `designation` (String)
- `joining_date` (Date)
- `basic_salary` (Decimal)
- `profile_image` (String, Nullable) - Employee ID/Profile Photo
- `status` (Enum: Active, On Leave, Resigned)
- `timestamps`

---

## 10. Website CMS (Content Management)

### `cms_hero_section`
- `id` (PK, BigInt)
- `title` (String)
- `subtitle` (Text)
- `primary_btn_text` (String)
- `primary_btn_link` (String)
- `video_btn_text` (String)
- `video_url` (String)
- `background_image` (String)
- `is_active` (Boolean)
- `timestamps`

### `cms_services`
- `id` (PK, BigInt)
- `icon_class` (String) - e.g., Lucide or FontAwesome class
- `title` (String)
- `short_description` (Text)
- `long_description` (Text)
- `image` (String)
- `is_active` (Boolean)
- `timestamps`

### `cms_testimonials`
- `id` (PK, BigInt)
- `patient_name` (String)
- `role_or_location` (String)
- `content` (Text)
- `rating` (Int)
- `avatar_image` (String)
- `is_active` (Boolean)
- `timestamps`

### `cms_blogs`
- `id` (PK, BigInt)
- `author_id` (FK -> users.id)
- `title` (String)
- `slug` (String, Unique)
- `content` (Text)
- `cover_image` (String)
- `published_at` (DateTime, Nullable)
- `is_active` (Boolean)
- `timestamps`

### `cms_why_choose_us`
- `id` (PK, BigInt)
- `section_title` (String)
- `description` (Text)
- `points_json` (JSON) - Array of points with titles and icons
- `image` (String)
- `timestamps`

---

## 11. System Settings

### `settings`
- `id` (PK, BigInt)
- `key` (String, Unique) - e.g., 'hospital_name', 'contact_email', 'emergency_phone', 'logo', 'logo_white', 'favicon'
- `value` (Text) - (For image keys like 'logo', this stores the file path/URL)
- `timestamps`
