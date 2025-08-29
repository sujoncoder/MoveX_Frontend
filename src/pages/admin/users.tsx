import React, { useState } from 'react';
import { Search, Plus, Eye, Edit, Trash2, Users } from 'lucide-react';

interface User {
    _id: string;
    name: string;
    email: string;
    phone: string;
    role: string;
    isBlocked: boolean;
    createdAt: string;
}

const UserManagement: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const users: User[] = [
        {
            _id: '68a5e89ac52889b69cc06bcf',
            name: 'Admin',
            email: 'admin@gmail.com',
            phone: '01999-986919',
            role: 'ADMIN',
            isBlocked: false,
            createdAt: '2025-08-20T15:24:10.670+00:00',
        },
        {
            _id: '68a5e89ac52889b69cc06bd0',
            name: 'John Doe',
            email: 'john.doe@gmail.com',
            phone: '01777-123456',
            role: 'USER',
            isBlocked: false,
            createdAt: '2024-12-15T08:20:10.670+00:00',
        },
        {
            _id: '68a5e89ac52889b69cc06bd1',
            name: 'Maria Ahmed',
            email: 'maria.ahmed@gmail.com',
            phone: '01888-789012',
            role: 'DRIVER',
            isBlocked: false,
            createdAt: '2024-11-08T12:15:30.890+00:00',
        },
        {
            _id: '68a5e89ac52889b69cc06bd2',
            name: 'Rahman Ali',
            email: 'rahman.ali@gmail.com',
            phone: '01999-123789',
            role: 'USER',
            isBlocked: true,
            createdAt: '2024-08-30T10:20:15.678+00:00',
        },
    ];

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const formatDate = (dateString: string): string => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className="p-4 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Users</h1>
                    <p className="text-gray-600">Manage all users</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                    <Plus className="w-4 h-4" />
                    Add User
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <Users className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Total Users</p>
                            <p className="text-xl font-bold">{users.length}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                            <Users className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Active</p>
                            <p className="text-xl font-bold">{users.filter(u => !u.isBlocked).length}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-100 rounded-lg">
                            <Users className="w-5 h-5 text-red-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Blocked</p>
                            <p className="text-xl font-bold">{users.filter(u => u.isBlocked).length}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search */}
            <div className="bg-white p-4 rounded-lg shadow-sm border mb-6">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search users..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joined</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filteredUsers.map((user) => (
                                <tr key={user._id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div>
                                            <div className="font-medium text-gray-900">{user.name}</div>
                                            <div className="text-sm text-gray-500">{user._id.slice(-8)}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div>
                                            <div className="text-sm text-gray-900">{user.email}</div>
                                            <div className="text-sm text-gray-500">{user.phone}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 text-xs rounded-full ${user.role === 'ADMIN' ? 'bg-purple-100 text-purple-800' :
                                            user.role === 'DRIVER' ? 'bg-green-100 text-green-800' :
                                                'bg-blue-100 text-blue-800'
                                            }`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 text-xs rounded-full ${user.isBlocked ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                                            }`}>
                                            {user.isBlocked ? 'Blocked' : 'Active'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-900">
                                        {formatDate(user.createdAt)}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <button className="p-1 text-gray-600 hover:text-blue-600">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button className="p-1 text-gray-600 hover:text-green-600">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button className="p-1 text-gray-600 hover:text-red-600">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden">
                    {filteredUsers.map((user) => (
                        <div key={user._id} className="p-4 border-b border-gray-200 last:border-b-0">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="font-medium text-gray-900">{user.name}</h3>
                                    <p className="text-sm text-gray-500">{user.email}</p>
                                </div>
                                <span className={`px-2 py-1 text-xs rounded-full ${user.isBlocked ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                                    }`}>
                                    {user.isBlocked ? 'Blocked' : 'Active'}
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                                <span>{user.phone}</span>
                                <span className={`px-2 py-1 text-xs rounded-full ${user.role === 'ADMIN' ? 'bg-purple-100 text-purple-800' :
                                    user.role === 'DRIVER' ? 'bg-green-100 text-green-800' :
                                        'bg-blue-100 text-blue-800'
                                    }`}>
                                    {user.role}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">
                                    Joined: {formatDate(user.createdAt)}
                                </span>
                                <div className="flex gap-2">
                                    <button className="p-1 text-gray-600 hover:text-blue-600">
                                        <Eye className="w-4 h-4" />
                                    </button>
                                    <button className="p-1 text-gray-600 hover:text-green-600">
                                        <Edit className="w-4 h-4" />
                                    </button>
                                    <button className="p-1 text-gray-600 hover:text-red-600">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserManagement;