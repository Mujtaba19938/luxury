import React from 'react';
import { X, User, Mail, LogOut, Settings } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!isOpen || !user) return null;

  const handleLogout = () => {
    logout();
    onClose();
  };

  const handleAccountSettings = () => {
    onClose();
    navigate('/account-settings');
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm dark:bg-black/40"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white/90 dark:bg-luxury-dark-surface/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 dark:border-luxury-dark-border/30 p-8 max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/40 dark:hover:bg-luxury-dark-surfaceHover/40 transition-all duration-300 text-primary-500 dark:text-luxury-dark-textSecondary hover:text-primary-900 dark:hover:text-luxury-dark-text"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Profile Header */}
        <div className="text-center mb-6">
          <div className="relative inline-block mb-4">
            <img
              src={user.avatar}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-20 h-20 rounded-full border-4 border-white/50 dark:border-luxury-dark-border/50 shadow-lg"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 border-2 border-white dark:border-luxury-dark-surface rounded-full"></div>
          </div>
          <h2 className="text-2xl font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text mb-1">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-primary-500 dark:text-luxury-dark-textSecondary font-['Inter'] text-sm">
            Luxury Member
          </p>
        </div>

        {/* Profile Info */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center p-3 rounded-xl bg-white/50 dark:bg-luxury-dark-surfaceHover/50 border border-white/30 dark:border-luxury-dark-border/30">
            <User className="w-5 h-5 text-primary-400 dark:text-luxury-dark-accent mr-3" />
            <div>
              <p className="text-sm font-['Inter'] text-primary-500 dark:text-luxury-dark-textSecondary">Full Name</p>
              <p className="font-['Inter'] text-primary-900 dark:text-luxury-dark-text">{user.firstName} {user.lastName}</p>
            </div>
          </div>

          <div className="flex items-center p-3 rounded-xl bg-white/50 dark:bg-luxury-dark-surfaceHover/50 border border-white/30 dark:border-luxury-dark-border/30">
            <Mail className="w-5 h-5 text-primary-400 dark:text-luxury-dark-accent mr-3" />
            <div>
              <p className="text-sm font-['Inter'] text-primary-500 dark:text-luxury-dark-textSecondary">Email Address</p>
              <p className="font-['Inter'] text-primary-900 dark:text-luxury-dark-text">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleAccountSettings}
            className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-white/50 dark:bg-luxury-dark-surfaceHover/50 border border-white/30 dark:border-luxury-dark-border/30 hover:bg-white/70 dark:hover:bg-luxury-dark-surfaceHover/70 transition-all duration-300 font-['Inter'] text-primary-900 dark:text-luxury-dark-text group"
          >
            <Settings className="w-5 h-5 mr-3 text-primary-400 dark:text-luxury-dark-accent group-hover:text-primary-900 dark:group-hover:text-luxury-dark-text transition-colors duration-300" />
            Account Settings
          </button>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-300 font-['Inter'] text-red-600 dark:text-red-400 group"
          >
            <LogOut className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
            Sign Out
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 pt-4 border-t border-white/30 dark:border-luxury-dark-border/30">
          <p className="text-xs text-primary-500 dark:text-luxury-dark-textSecondary font-['Inter']">
            Member since {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
}
