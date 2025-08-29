import { useState } from 'react';
import { Camera, Edit, Save, X, Mail, Phone, MapPin, Calendar, User, Shield, Bell, Lock, Eye, EyeOff } from 'lucide-react';

interface UserProfile {
    _id: string;
    name: string;
    email: string;
    phone: string;
    role: string;
    avatar?: string;
    address?: string;
    dateOfBirth?: string;
    joinDate: string;
    bio?: string;
    isBlocked: boolean;
}

const Profile = () => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [showPasswordChange, setShowPasswordChange] = useState<boolean>(false);
    const [showCurrentPassword, setShowCurrentPassword] = useState<boolean>(false);
    const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

    const [profile, setProfile] = useState<UserProfile>({
        _id: '68a5e89ac52889b69cc06bcf',
        name: 'Rahman Ahmed',
        email: 'rahman.ahmed@gmail.com',
        phone: '01999-986919',
        role: 'USER',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
        address: 'House 25, Road 12, Dhanmondi, Dhaka-1205',
        dateOfBirth: '1990-05-15',
        joinDate: '2024-08-20T15:24:10.670+00:00',
        bio: 'Regular customer who loves using this service for sending parcels to family and friends.',
        isBlocked: false,
    });

    const [editForm, setEditForm] = useState(profile);
    const [passwordForm, setPasswordForm] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const handleInputChange = (field: keyof UserProfile, value: string) => {
        setEditForm(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handlePasswordChange = (field: keyof typeof passwordForm, value: string) => {
        setPasswordForm(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSave = () => {
        setProfile(editForm);
        setIsEditing(false);
        // Here you would typically make an API call to save the changes
    };

    const handleCancel = () => {
        setEditForm(profile);
        setIsEditing(false);
    };

    const handlePasswordSubmit = () => {
        if (passwordForm.newPassword !== passwordForm.confirmPassword) {
            alert('New passwords do not match!');
            return;
        }
        // Here you would make an API call to change password
        setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
        setShowPasswordChange(false);
        alert('Password updated successfully!');
    };

    const formatDate = (dateString: string): string => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getRoleBadgeColor = (role: string): string => {
        switch (role) {
            case 'ADMIN': return 'bg-purple-100 text-purple-800 border-purple-200';
            case 'DRIVER': return 'bg-green-100 text-green-800 border-green-200';
            case 'SUPPORT': return 'bg-orange-100 text-orange-800 border-orange-200';
            default: return 'bg-blue-100 text-blue-800 border-blue-200';
        }
    };

    return (
        <div className="p-4 max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
                <p className="text-gray-600">Manage your account settings and personal information</p>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden mb-6">
                {/* Cover & Avatar Section */}
                <div className="relative">
                    <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                    <div className="absolute -bottom-12 left-6">
                        <div className="relative">
                            <img
                                src={profile.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.name)}&background=0ea5e9&color=fff&size=96`}
                                alt={profile.name}
                                className="w-24 h-24 rounded-full border-4 border-white object-cover"
                            />
                            <button className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-colors">
                                <Camera className="w-3 h-3" />
                            </button>
                        </div>
                    </div>
                    <div className="absolute bottom-4 right-6">
                        {!isEditing ? (
                            <button
                                onClick={() => setIsEditing(true)}
                                className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg border shadow-sm flex items-center gap-2 transition-colors"
                            >
                                <Edit className="w-4 h-4" />
                                Edit Profile
                            </button>
                        ) : (
                            <div className="flex gap-2">
                                <button
                                    onClick={handleSave}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                                >
                                    <Save className="w-4 h-4" />
                                    Save
                                </button>
                                <button
                                    onClick={handleCancel}
                                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                    Cancel
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Profile Info */}
                <div className="pt-16 pb-6 px-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                        <div>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={editForm.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                    className="text-2xl font-bold text-gray-900 bg-transparent border-b-2 border-blue-500 focus:outline-none"
                                />
                            ) : (
                                <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
                            )}
                            <div className="flex items-center gap-2 mt-1">
                                <span className={`px-2 py-1 text-xs rounded-full border ${getRoleBadgeColor(profile.role)}`}>
                                    {profile.role}
                                </span>
                                <span className={`px-2 py-1 text-xs rounded-full border ${profile.isBlocked ? 'bg-red-100 text-red-800 border-red-200' : 'bg-green-100 text-green-800 border-green-200'
                                    }`}>
                                    {profile.isBlocked ? 'Blocked' : 'Active'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="mb-6">
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Bio</h3>
                        {isEditing ? (
                            <textarea
                                value={editForm.bio || ''}
                                onChange={(e) => handleInputChange('bio', e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                rows={3}
                                placeholder="Tell us about yourself..."
                            />
                        ) : (
                            <p className="text-gray-600">{profile.bio || 'No bio available'}</p>
                        )}
                    </div>

                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>

                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-gray-400" />
                                <div className="flex-1">
                                    <label className="text-sm font-medium text-gray-700">Email</label>
                                    {isEditing ? (
                                        <input
                                            type="email"
                                            value={editForm.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            className="block w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    ) : (
                                        <p className="text-gray-900">{profile.email}</p>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-gray-400" />
                                <div className="flex-1">
                                    <label className="text-sm font-medium text-gray-700">Phone</label>
                                    {isEditing ? (
                                        <input
                                            type="tel"
                                            value={editForm.phone}
                                            onChange={(e) => handleInputChange('phone', e.target.value)}
                                            className="block w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    ) : (
                                        <p className="text-gray-900">{profile.phone}</p>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                                <div className="flex-1">
                                    <label className="text-sm font-medium text-gray-700">Address</label>
                                    {isEditing ? (
                                        <textarea
                                            value={editForm.address || ''}
                                            onChange={(e) => handleInputChange('address', e.target.value)}
                                            className="block w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                            rows={2}
                                            placeholder="Enter your address"
                                        />
                                    ) : (
                                        <p className="text-gray-900">{profile.address || 'No address provided'}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>

                            <div className="flex items-center gap-3">
                                <User className="w-5 h-5 text-gray-400" />
                                <div className="flex-1">
                                    <label className="text-sm font-medium text-gray-700">Date of Birth</label>
                                    {isEditing ? (
                                        <input
                                            type="date"
                                            value={editForm.dateOfBirth || ''}
                                            onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                                            className="block w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    ) : (
                                        <p className="text-gray-900">
                                            {profile.dateOfBirth ? formatDate(profile.dateOfBirth) : 'Not provided'}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Calendar className="w-5 h-5 text-gray-400" />
                                <div className="flex-1">
                                    <label className="text-sm font-medium text-gray-700">Member Since</label>
                                    <p className="text-gray-900">{formatDate(profile.joinDate)}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Shield className="w-5 h-5 text-gray-400" />
                                <div className="flex-1">
                                    <label className="text-sm font-medium text-gray-700">Account ID</label>
                                    <p className="text-gray-900 font-mono text-sm">{profile._id}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Security Settings */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h3>

                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-3">
                            <Lock className="w-5 h-5 text-gray-400" />
                            <div>
                                <p className="font-medium text-gray-900">Password</p>
                                <p className="text-sm text-gray-600">Last changed 30 days ago</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setShowPasswordChange(true)}
                            className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                        >
                            Change
                        </button>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-3">
                            <Bell className="w-5 h-5 text-gray-400" />
                            <div>
                                <p className="font-medium text-gray-900">Email Notifications</p>
                                <p className="text-sm text-gray-600">Receive updates about your parcels</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>
            </div>

            {/* Password Change Modal */}
            {showPasswordChange && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-semibold text-gray-900">Change Password</h3>
                                <button
                                    onClick={() => setShowPasswordChange(false)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Current Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showCurrentPassword ? 'text' : 'password'}
                                            value={passwordForm.currentPassword}
                                            onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                                            className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        New Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showNewPassword ? 'text' : 'password'}
                                            value={passwordForm.newPassword}
                                            onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                                            className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Confirm New Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            value={passwordForm.confirmPassword}
                                            onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                                            className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>

                                <div className="flex gap-3 pt-4">
                                    <button
                                        onClick={handlePasswordSubmit}
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                                    >
                                        Update Password
                                    </button>
                                    <button
                                        onClick={() => setShowPasswordChange(false)}
                                        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg font-medium transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;