import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { LogIn, Lock, Mail } from 'lucide-react';
import toast from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/admin';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await login(email, password);
            toast.success('Logged in successfully!');
            navigate(from, { replace: true });
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to login. Please check your credentials.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
            <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-300">
                <div className="card-body">
                    <div className="flex flex-col items-center mb-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <LogIn className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="card-title text-2xl font-bold">Admin Login</h2>
                        <p className="text-base-content/60 text-sm">Sign in to access your dashboard</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2 focus-within:ring-2 focus-within:ring-primary/50">
                                <Mail className="w-4 h-4 text-base-content/50" />
                                <input 
                                    type="email" 
                                    className="grow" 
                                    placeholder="admin@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required 
                                />
                            </label>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2 focus-within:ring-2 focus-within:ring-primary/50">
                                <Lock className="w-4 h-4 text-base-content/50" />
                                <input 
                                    type="password" 
                                    className="grow" 
                                    placeholder="••••••••" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required 
                                />
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button 
                                type="submit" 
                                className="btn btn-primary w-full"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <span className="loading loading-spinner loading-sm"></span>
                                ) : (
                                    'Sign In'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
