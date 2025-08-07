import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  User,
  Lock,
  Bell,
  CreditCard,
  Palette,
  ChevronRight,
  Edit3,
  Camera
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/Button';

type SettingsSection = 'profile' | 'security' | 'notifications' | 'billing' | 'appearance';

export default function AccountSettings() {
  const [activeSection, setActiveSection] = useState<SettingsSection>('profile');
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useAuth();

  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    bio: 'Luxury enthusiast and connoisseur of fine experiences.',
    location: 'New York, NY',
    phone: '+1 (555) 123-4567'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    marketingEmails: false,
    securityAlerts: true,
    weeklyDigest: true
  });

  const settingsSections = [
    {
      id: 'profile' as SettingsSection,
      label: 'Profile',
      icon: User,
      description: 'Manage your personal information'
    },
    {
      id: 'security' as SettingsSection,
      label: 'Security',
      icon: Lock,
      description: 'Password and account security'
    },
    {
      id: 'notifications' as SettingsSection,
      label: 'Notifications',
      icon: Bell,
      description: 'Email and push notifications'
    },
    {
      id: 'billing' as SettingsSection,
      label: 'Billing',
      icon: CreditCard,
      description: 'Payment methods and subscriptions'
    },
    {
      id: 'appearance' as SettingsSection,
      label: 'Appearance',
      icon: Palette,
      description: 'Theme and display preferences'
    }
  ];

  const handleProfileSave = () => {
    setIsEditing(false);
    // Handle profile save logic here
  };

  const handlePasswordChange = () => {
    // Handle password change logic here
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  const handleNotificationToggle = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const renderProfileSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text">Profile Information</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center gap-2"
        >
          <Edit3 className="w-4 h-4" />
          {isEditing ? 'Cancel' : 'Edit'}
        </Button>
      </div>

      <div className="space-y-6">
        {/* Profile Picture */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <img
              src={user?.avatar}
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-white/50 dark:border-luxury-dark-border/50"
            />
            <button className="absolute -bottom-1 -right-1 p-2 bg-primary-400 dark:bg-luxury-dark-accent rounded-full hover:bg-primary-500 dark:hover:bg-luxury-dark-accentHover transition-colors">
              <Camera className="w-4 h-4 text-white" />
            </button>
          </div>
          <div>
            <h3 className="text-lg font-['Inter'] text-primary-900 dark:text-luxury-dark-text">{user?.firstName} {user?.lastName}</h3>
            <p className="text-primary-500 dark:text-luxury-dark-textSecondary">Luxury Member</p>
          </div>
        </div>

        {/* Profile Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-primary-700 dark:text-luxury-dark-textSecondary mb-2">First Name</label>
            <input
              type="text"
              value={profileData.firstName}
              onChange={(e) => setProfileData(prev => ({ ...prev, firstName: e.target.value }))}
              disabled={!isEditing}
              className="w-full px-4 py-3 rounded-xl border border-white/30 dark:border-luxury-dark-border/30 bg-white/50 dark:bg-luxury-dark-surfaceHover/50 text-primary-900 dark:text-luxury-dark-text placeholder-primary-500 dark:placeholder-luxury-dark-textSecondary disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary-400 dark:focus:ring-luxury-dark-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary-700 dark:text-luxury-dark-textSecondary mb-2">Last Name</label>
            <input
              type="text"
              value={profileData.lastName}
              onChange={(e) => setProfileData(prev => ({ ...prev, lastName: e.target.value }))}
              disabled={!isEditing}
              className="w-full px-4 py-3 rounded-xl border border-white/30 dark:border-luxury-dark-border/30 bg-white/50 dark:bg-luxury-dark-surfaceHover/50 text-primary-900 dark:text-luxury-dark-text placeholder-primary-500 dark:placeholder-luxury-dark-textSecondary disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary-400 dark:focus:ring-luxury-dark-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary-700 dark:text-luxury-dark-textSecondary mb-2">Email</label>
            <input
              type="email"
              value={profileData.email}
              onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
              disabled={!isEditing}
              className="w-full px-4 py-3 rounded-xl border border-white/30 dark:border-luxury-dark-border/30 bg-white/50 dark:bg-luxury-dark-surfaceHover/50 text-primary-900 dark:text-luxury-dark-text placeholder-primary-500 dark:placeholder-luxury-dark-textSecondary disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary-400 dark:focus:ring-luxury-dark-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary-700 dark:text-luxury-dark-textSecondary mb-2">Phone</label>
            <input
              type="tel"
              value={profileData.phone}
              onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
              disabled={!isEditing}
              className="w-full px-4 py-3 rounded-xl border border-white/30 dark:border-luxury-dark-border/30 bg-white/50 dark:bg-luxury-dark-surfaceHover/50 text-primary-900 dark:text-luxury-dark-text placeholder-primary-500 dark:placeholder-luxury-dark-textSecondary disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary-400 dark:focus:ring-luxury-dark-accent"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-primary-700 dark:text-luxury-dark-textSecondary mb-2">Location</label>
            <input
              type="text"
              value={profileData.location}
              onChange={(e) => setProfileData(prev => ({ ...prev, location: e.target.value }))}
              disabled={!isEditing}
              className="w-full px-4 py-3 rounded-xl border border-white/30 dark:border-luxury-dark-border/30 bg-white/50 dark:bg-luxury-dark-surfaceHover/50 text-primary-900 dark:text-luxury-dark-text placeholder-primary-500 dark:placeholder-luxury-dark-textSecondary disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary-400 dark:focus:ring-luxury-dark-accent"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-primary-700 dark:text-luxury-dark-textSecondary mb-2">Bio</label>
            <textarea
              value={profileData.bio}
              onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
              disabled={!isEditing}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-white/30 dark:border-luxury-dark-border/30 bg-white/50 dark:bg-luxury-dark-surfaceHover/50 text-primary-900 dark:text-luxury-dark-text placeholder-primary-500 dark:placeholder-luxury-dark-textSecondary disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary-400 dark:focus:ring-luxury-dark-accent resize-none"
            />
          </div>
        </div>

        {isEditing && (
          <div className="flex gap-4">
            <Button onClick={handleProfileSave}>Save Changes</Button>
            <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
          </div>
        )}
      </div>
    </div>
  );

  const renderSecuritySection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text">Security Settings</h2>
      
      <div className="space-y-6">
        <div className="bg-white/50 dark:bg-luxury-dark-surfaceHover/50 rounded-2xl p-6 border border-white/30 dark:border-luxury-dark-border/30">
          <h3 className="text-lg font-['Inter'] text-primary-900 dark:text-luxury-dark-text mb-4">Change Password</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary-700 dark:text-luxury-dark-textSecondary mb-2">Current Password</label>
              <input
                type="password"
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData(prev => ({ ...prev, currentPassword: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-white/30 dark:border-luxury-dark-border/30 bg-white/50 dark:bg-luxury-dark-surfaceHover/50 text-primary-900 dark:text-luxury-dark-text placeholder-primary-500 dark:placeholder-luxury-dark-textSecondary focus:outline-none focus:ring-2 focus:ring-primary-400 dark:focus:ring-luxury-dark-accent"
                placeholder="Enter current password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary-700 dark:text-luxury-dark-textSecondary mb-2">New Password</label>
              <input
                type="password"
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-white/30 dark:border-luxury-dark-border/30 bg-white/50 dark:bg-luxury-dark-surfaceHover/50 text-primary-900 dark:text-luxury-dark-text placeholder-primary-500 dark:placeholder-luxury-dark-textSecondary focus:outline-none focus:ring-2 focus:ring-primary-400 dark:focus:ring-luxury-dark-accent"
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary-700 dark:text-luxury-dark-textSecondary mb-2">Confirm New Password</label>
              <input
                type="password"
                value={passwordData.confirmPassword}
                onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-white/30 dark:border-luxury-dark-border/30 bg-white/50 dark:bg-luxury-dark-surfaceHover/50 text-primary-900 dark:text-luxury-dark-text placeholder-primary-500 dark:placeholder-luxury-dark-textSecondary focus:outline-none focus:ring-2 focus:ring-primary-400 dark:focus:ring-luxury-dark-accent"
                placeholder="Confirm new password"
              />
            </div>
            <Button onClick={handlePasswordChange}>Update Password</Button>
          </div>
        </div>

        <div className="bg-white/50 dark:bg-luxury-dark-surfaceHover/50 rounded-2xl p-6 border border-white/30 dark:border-luxury-dark-border/30">
          <h3 className="text-lg font-['Inter'] text-primary-900 dark:text-luxury-dark-text mb-4">Two-Factor Authentication</h3>
          <p className="text-primary-600 dark:text-luxury-dark-textSecondary mb-4">Add an extra layer of security to your account.</p>
          <Button variant="outline">Enable 2FA</Button>
        </div>
      </div>
    </div>
  );

  const renderNotificationsSection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text">Notification Preferences</h2>
      
      <div className="space-y-4">
        {Object.entries(notifications).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between p-4 bg-white/50 dark:bg-luxury-dark-surfaceHover/50 rounded-xl border border-white/30 dark:border-luxury-dark-border/30">
            <div>
              <h3 className="font-['Inter'] text-primary-900 dark:text-luxury-dark-text capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <p className="text-sm text-primary-500 dark:text-luxury-dark-textSecondary">
                {key === 'emailNotifications' && 'Receive notifications via email'}
                {key === 'pushNotifications' && 'Receive push notifications'}
                {key === 'marketingEmails' && 'Receive marketing and promotional emails'}
                {key === 'securityAlerts' && 'Get notified about security events'}
                {key === 'weeklyDigest' && 'Receive weekly summary emails'}
              </p>
            </div>
            <button
              onClick={() => handleNotificationToggle(key as keyof typeof notifications)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                value ? 'bg-primary-400 dark:bg-luxury-dark-accent' : 'bg-primary-200 dark:bg-luxury-dark-border'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  value ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderBillingSection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text">Billing & Subscriptions</h2>
      
      <div className="bg-white/50 dark:bg-luxury-dark-surfaceHover/50 rounded-2xl p-6 border border-white/30 dark:border-luxury-dark-border/30">
        <h3 className="text-lg font-['Inter'] text-primary-900 dark:text-luxury-dark-text mb-4">Current Plan</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-['Inter'] text-primary-900 dark:text-luxury-dark-text">Luxury Premium</p>
            <p className="text-sm text-primary-500 dark:text-luxury-dark-textSecondary">$99/month</p>
          </div>
          <Button variant="outline">Manage Plan</Button>
        </div>
      </div>

      <div className="bg-white/50 dark:bg-luxury-dark-surfaceHover/50 rounded-2xl p-6 border border-white/30 dark:border-luxury-dark-border/30">
        <h3 className="text-lg font-['Inter'] text-primary-900 dark:text-luxury-dark-text mb-4">Payment Methods</h3>
        <p className="text-primary-600 dark:text-luxury-dark-textSecondary mb-4">No payment methods on file.</p>
        <Button>Add Payment Method</Button>
      </div>
    </div>
  );

  const renderAppearanceSection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text">Appearance Settings</h2>
      
      <div className="bg-white/50 dark:bg-luxury-dark-surfaceHover/50 rounded-2xl p-6 border border-white/30 dark:border-luxury-dark-border/30">
        <h3 className="text-lg font-['Inter'] text-primary-900 dark:text-luxury-dark-text mb-4">Theme Preferences</h3>
        <p className="text-primary-600 dark:text-luxury-dark-textSecondary mb-4">
          Customize your experience with our theme options. You can also use the theme toggle in the navigation bar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border-2 border-primary-300 dark:border-luxury-dark-accent rounded-xl bg-white/30 dark:bg-luxury-dark-surface/30">
            <div className="w-full h-20 bg-gradient-to-br from-primary-50 to-primary-200 rounded-lg mb-2"></div>
            <p className="text-sm font-medium text-primary-900 dark:text-luxury-dark-text">Light Mode</p>
            <p className="text-xs text-primary-500 dark:text-luxury-dark-textSecondary">Clean and bright</p>
          </div>
          <div className="p-4 border-2 border-primary-300 dark:border-luxury-dark-accent rounded-xl bg-white/30 dark:bg-luxury-dark-surface/30">
            <div className="w-full h-20 bg-gradient-to-br from-luxury-dark-bg to-luxury-dark-surface rounded-lg mb-2"></div>
            <p className="text-sm font-medium text-primary-900 dark:text-luxury-dark-text">Dark Mode</p>
            <p className="text-xs text-primary-500 dark:text-luxury-dark-textSecondary">Elegant and easy on eyes</p>
          </div>
          <div className="p-4 border-2 border-white/30 dark:border-luxury-dark-border/30 rounded-xl bg-white/30 dark:bg-luxury-dark-surface/30">
            <div className="w-full h-20 bg-gradient-to-br from-primary-100 to-primary-300 rounded-lg mb-2"></div>
            <p className="text-sm font-medium text-primary-900 dark:text-luxury-dark-text">Auto</p>
            <p className="text-xs text-primary-500 dark:text-luxury-dark-textSecondary">Follows system</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return renderProfileSection();
      case 'security':
        return renderSecuritySection();
      case 'notifications':
        return renderNotificationsSection();
      case 'billing':
        return renderBillingSection();
      case 'appearance':
        return renderAppearanceSection();
      default:
        return renderProfileSection();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 dark:from-luxury-dark-bg dark:via-luxury-dark-surface dark:to-luxury-dark-surface">
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

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-primary-500 dark:text-luxury-dark-textSecondary hover:text-primary-900 dark:hover:text-luxury-dark-text transition-colors duration-300 mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text mb-2">Account Settings</h1>
          <p className="text-primary-500 dark:text-luxury-dark-textSecondary font-['Inter']">Manage your account preferences and settings</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-80">
            <div className="bg-white/60 dark:bg-luxury-dark-surface/60 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/30 dark:border-luxury-dark-border/30">
              <nav className="space-y-2">
                {settingsSections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 font-['Inter'] text-left ${
                        activeSection === section.id
                          ? 'bg-primary-400/20 dark:bg-luxury-dark-accent/20 text-primary-900 dark:text-luxury-dark-text border border-primary-400/30 dark:border-luxury-dark-accent/30'
                          : 'text-primary-500 dark:text-luxury-dark-textSecondary hover:text-primary-900 dark:hover:text-luxury-dark-text hover:bg-white/60 dark:hover:bg-luxury-dark-surfaceHover/60'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5" />
                        <div>
                          <p className="font-medium">{section.label}</p>
                          <p className="text-xs opacity-75">{section.description}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white/60 dark:bg-luxury-dark-surface/60 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/30 dark:border-luxury-dark-border/30">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
