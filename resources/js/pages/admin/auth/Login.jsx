import React, { useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { LogIn, Lock, Mail, ShieldCheck, HeartPulse } from 'lucide-react';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const { login, token } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/admin';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await login(email, password);
            toast.success('Welcome back to RoseCare Admin!');
            navigate(from, { replace: true });
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to login. Please check your credentials.');
        } finally {
            setIsLoading(false);
        }
    };

    if (token) {
        return <Navigate to="/admin" replace />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 flex items-center justify-center p-4 overflow-hidden relative">
            
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <motion.div 
                    animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                />
                <motion.div 
                    animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-10 -right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
                />
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-4xl flex bg-base-100/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/10 z-10"
            >
                {/* Left side branding (Hidden on mobile) */}
                <div className="hidden lg:flex w-1/2 bg-primary p-12 flex-col justify-between text-primary-content relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute right-0 bottom-0 transform translate-x-1/3 translate-y-1/3">
                            <HeartPulse size={400} />
                        </div>
                    </div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-12">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-lg">
                                <HeartPulse size={28} strokeWidth={2.5} />
                            </div>
                            <span className="text-3xl font-black tracking-tight">RoseCare</span>
                        </div>
                        
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h1 className="text-4xl font-bold mb-6 leading-tight">
                                Secure<br/>Admin Portal
                            </h1>
                            <p className="text-primary-content/80 text-lg leading-relaxed max-w-sm">
                                Manage hospital operations, staff, and patient records securely from one centralized dashboard.
                            </p>
                        </motion.div>
                    </div>

                    <div className="relative z-10 flex items-center gap-3 text-sm text-primary-content/70">
                        <ShieldCheck size={18} />
                        <span>HIPAA Compliant Secure System</span>
                    </div>
                </div>

                {/* Right side login form */}
                <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-base-100/90">
                    <div className="mb-10 text-center lg:text-left">
                        <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                                <HeartPulse size={24} />
                            </div>
                            <span className="text-2xl font-bold text-base-content">RoseCare</span>
                        </div>
                        
                        <h2 className="text-3xl font-bold text-base-content mb-2">Welcome Back</h2>
                        <p className="text-base-content/60">Please sign in to your administrator account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="form-control w-full">
                            <label className="label pb-1.5">
                                <span className="label-text font-semibold text-base-content/80">Email Address</span>
                            </label>
                            <label className="input input-bordered w-full flex items-center gap-3 bg-base-200/50 focus-within:bg-base-100 focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary transition-all duration-300">
                                <Mail className="w-5 h-5 text-base-content/40" />
                                <input 
                                    type="email" 
                                    className="grow text-base" 
                                    placeholder="admin@rosecare.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required 
                                />
                            </label>
                        </div>

                        <div className="form-control w-full">
                            <label className="label pb-1.5">
                                <span className="label-text font-semibold text-base-content/80">Password</span>
                            </label>
                            <label className="input input-bordered w-full flex items-center gap-3 bg-base-200/50 focus-within:bg-base-100 focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary transition-all duration-300">
                                <Lock className="w-5 h-5 text-base-content/40" />
                                <input 
                                    type="password" 
                                    className="grow text-base" 
                                    placeholder="••••••••" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required 
                                />
                            </label>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                            <label className="label cursor-pointer gap-2 justify-start">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-primary rounded" />
                                <span className="label-text">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-primary font-medium hover:underline transition-colors">
                                Forgot password?
                            </a>
                        </div>

                        <motion.button 
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit" 
                            className="btn btn-primary w-full shadow-lg shadow-primary/20 h-12 text-lg rounded-xl mt-4"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span className="loading loading-spinner loading-md"></span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    Sign In <LogIn size={18} />
                                </span>
                            )}
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
