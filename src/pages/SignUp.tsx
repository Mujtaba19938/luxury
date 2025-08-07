import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff, CheckCircle, XCircle } from 'lucide-react';
import Button from '../components/Button';

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Handle successful signup here
      console.log('Sign up successful:', formData);
    } catch (error) {
      console.error('Sign up failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.firstName && formData.lastName && formData.email && 
                     formData.password && formData.confirmPassword && 
                     formData.password === formData.confirmPassword;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefcfb] via-[#f3f0ee] to-[#e8e4e2] flex items-center justify-center px-4 py-8">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(201, 173, 167, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201, 173, 167, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="w-full max-w-md">
        {/* Back to Home Link */}
        <Link 
          to="/" 
          className="inline-flex items-center text-[#9a8c98] hover:text-[#22223b] transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* Sign Up Form */}
        <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/30">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-['Playfair_Display'] text-[#22223b] mb-2">
              Join Luxury
            </h1>
            <p className="text-[#9a8c98] font-['Inter']">
              Create your account and unlock exclusive experiences
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-['Inter'] font-medium text-[#22223b] mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 font-['Inter'] ${
                    errors.firstName 
                      ? 'border-red-300 bg-red-50/50' 
                      : 'border-white/30 bg-white/50 hover:bg-white/70 focus:bg-white/80'
                  } focus:outline-none focus:ring-2 focus:ring-[#c9ada7]/30`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <div className="flex items-center mt-2 text-red-500 text-sm">
                    <XCircle className="w-4 h-4 mr-1" />
                    {errors.firstName}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-['Inter'] font-medium text-[#22223b] mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 font-['Inter'] ${
                    errors.lastName 
                      ? 'border-red-300 bg-red-50/50' 
                      : 'border-white/30 bg-white/50 hover:bg-white/70 focus:bg-white/80'
                  } focus:outline-none focus:ring-2 focus:ring-[#c9ada7]/30`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <div className="flex items-center mt-2 text-red-500 text-sm">
                    <XCircle className="w-4 h-4 mr-1" />
                    {errors.lastName}
                  </div>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-['Inter'] font-medium text-[#22223b] mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 font-['Inter'] ${
                  errors.email 
                    ? 'border-red-300 bg-red-50/50' 
                    : 'border-white/30 bg-white/50 hover:bg-white/70 focus:bg-white/80'
                } focus:outline-none focus:ring-2 focus:ring-[#c9ada7]/30`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <div className="flex items-center mt-2 text-red-500 text-sm">
                  <XCircle className="w-4 h-4 mr-1" />
                  {errors.email}
                </div>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-['Inter'] font-medium text-[#22223b] mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 pr-12 rounded-xl border transition-all duration-300 font-['Inter'] ${
                    errors.password 
                      ? 'border-red-300 bg-red-50/50' 
                      : 'border-white/30 bg-white/50 hover:bg-white/70 focus:bg-white/80'
                  } focus:outline-none focus:ring-2 focus:ring-[#c9ada7]/30`}
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#9a8c98] hover:text-[#22223b] transition-colors duration-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <div className="flex items-center mt-2 text-red-500 text-sm">
                  <XCircle className="w-4 h-4 mr-1" />
                  {errors.password}
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-['Inter'] font-medium text-[#22223b] mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 pr-12 rounded-xl border transition-all duration-300 font-['Inter'] ${
                    errors.confirmPassword 
                      ? 'border-red-300 bg-red-50/50' 
                      : 'border-white/30 bg-white/50 hover:bg-white/70 focus:bg-white/80'
                  } focus:outline-none focus:ring-2 focus:ring-[#c9ada7]/30`}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#9a8c98] hover:text-[#22223b] transition-colors duration-300"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <div className="flex items-center mt-2 text-red-500 text-sm">
                  <XCircle className="w-4 h-4 mr-1" />
                  {errors.confirmPassword}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="w-full group"
              size="lg"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Creating Account...
                </div>
              ) : (
                'Create Account'
              )}
            </Button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-[#9a8c98] font-['Inter']">
              Already have an account?{' '}
              <Link 
                to="/login" 
                className="text-[#c9ada7] hover:text-[#22223b] font-medium transition-colors duration-300"
              >
                Sign in here
              </Link>
            </p>
          </div>

          {/* Terms and Privacy */}
          <div className="text-center mt-6">
            <p className="text-xs text-[#9a8c98] font-['Inter']">
              By creating an account, you agree to our{' '}
              <Link to="/terms" className="text-[#c9ada7] hover:text-[#22223b] transition-colors duration-300">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-[#c9ada7] hover:text-[#22223b] transition-colors duration-300">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
