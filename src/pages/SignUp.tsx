import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff, XCircle } from 'lucide-react';
import Button from '../components/Button';
import { useAuth } from '../contexts/AuthContext';

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
  const navigate = useNavigate();
  const { signup } = useAuth();

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

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
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

    try {
      const success = await signup({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      });
      if (success) {
        navigate('/');
      } else {
        setErrors({ general: 'Failed to create account. Please try again.' });
      }
    } catch (error) {
      console.error('Sign up failed:', error);
      setErrors({ general: 'Sign up failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 dark:from-luxury-dark-bg dark:via-luxury-dark-surface dark:to-luxury-dark-surface flex items-center justify-center p-4">
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
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-primary-500 dark:text-luxury-dark-textSecondary hover:text-primary-900 dark:hover:text-luxury-dark-text transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* Sign Up Form */}
        <div className="bg-white/60 dark:bg-luxury-dark-surface/60 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/30 dark:border-luxury-dark-border/30">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text mb-2">
              Create Account
            </h1>
            <p className="text-primary-600 dark:text-luxury-dark-textSecondary">
              Join our luxury community
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-primary-700 dark:text-luxury-dark-textSecondary mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                    errors.firstName 
                      ? 'border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20 focus:ring-red-400 dark:focus:ring-red-500' 
                      : 'border-white/30 dark:border-luxury-dark-border/30 bg-white/50 dark:bg-luxury-dark-surfaceHover/50 focus:ring-primary-400 dark:focus:ring-luxury-dark-accent'
                  } text-primary-900 dark:text-luxury-dark-text placeholder-primary-500 dark:placeholder-luxury-dark-textSecondary`}
                  placeholder="First name"
                />
                {errors.firstName && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <XCircle className="w-4 h-4 mr-1" />
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-primary-700 dark:text-luxury-dark-textSecondary mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                    errors.lastName 
                      ? 'border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20 focus:ring-red-400 dark:focus:ring-red-500' 
                      : 'border-white/30 dark:border-luxury-dark-border/30 bg-white/50 dark:bg-luxury-dark-surfaceHover/50 focus:ring-primary-400 dark:focus:ring-luxury-dark-accent'
                  } text-primary-900 dark:text-luxury-dark-text placeholder-primary-500 dark:placeholder-luxury-dark-textSecondary`}
                  placeholder="Last name"
                />
                {errors.lastName && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <XCircle className="w-4 h-4 mr-1" />
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary-700 dark:text-luxury-dark-textSecondary mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                  errors.email 
                    ? 'border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20 focus:ring-red-400 dark:focus:ring-red-500' 
                    : 'border-white/30 dark:border-luxury-dark-border/30 bg-white/50 dark:bg-luxury-dark-surfaceHover/50 focus:ring-primary-400 dark:focus:ring-luxury-dark-accent'
                } text-primary-900 dark:text-luxury-dark-text placeholder-primary-500 dark:placeholder-luxury-dark-textSecondary`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                  <XCircle className="w-4 h-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-primary-700 dark:text-luxury-dark-textSecondary mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 pr-12 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                    errors.password 
                      ? 'border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20 focus:ring-red-400 dark:focus:ring-red-500' 
                      : 'border-white/30 dark:border-luxury-dark-border/30 bg-white/50 dark:bg-luxury-dark-surfaceHover/50 focus:ring-primary-400 dark:focus:ring-luxury-dark-accent'
                  } text-primary-900 dark:text-luxury-dark-text placeholder-primary-500 dark:placeholder-luxury-dark-textSecondary`}
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-500 dark:text-luxury-dark-textSecondary hover:text-primary-700 dark:hover:text-luxury-dark-text transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                  <XCircle className="w-4 h-4 mr-1" />
                  {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-primary-700 dark:text-luxury-dark-textSecondary mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 pr-12 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                    errors.confirmPassword 
                      ? 'border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20 focus:ring-red-400 dark:focus:ring-red-500' 
                      : 'border-white/30 dark:border-luxury-dark-border/30 bg-white/50 dark:bg-luxury-dark-surfaceHover/50 focus:ring-primary-400 dark:focus:ring-luxury-dark-accent'
                  } text-primary-900 dark:text-luxury-dark-text placeholder-primary-500 dark:placeholder-luxury-dark-textSecondary`}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-500 dark:text-luxury-dark-textSecondary hover:text-primary-700 dark:hover:text-luxury-dark-text transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                  <XCircle className="w-4 h-4 mr-1" />
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* General Error */}
            {errors.general && (
              <div className="flex items-center p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm">
                <XCircle className="w-4 h-4 mr-2" />
                {errors.general}
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>

          {/* Terms and Privacy */}
                      <div className="text-center mt-6">
              <p className="text-xs text-primary-500 dark:text-luxury-dark-textSecondary">
                By creating an account, you agree to our{' '}
                <button className="text-primary-900 dark:text-luxury-dark-text hover:text-primary-700 dark:hover:text-luxury-dark-accent underline bg-transparent border-none p-0 cursor-pointer">
                  Terms of Service
                </button>{' '}
                and{' '}
                <button className="text-primary-900 dark:text-luxury-dark-text hover:text-primary-700 dark:hover:text-luxury-dark-accent underline bg-transparent border-none p-0 cursor-pointer">
                  Privacy Policy
                </button>
              </p>
            </div>

          {/* Sign In Link */}
          <div className="text-center mt-8 pt-6 border-t border-white/30 dark:border-luxury-dark-border/30">
            <p className="text-primary-600 dark:text-luxury-dark-textSecondary text-sm">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-primary-900 dark:text-luxury-dark-text hover:text-primary-700 dark:hover:text-luxury-dark-accent font-medium transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
