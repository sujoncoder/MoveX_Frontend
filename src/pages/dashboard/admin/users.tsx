import { useState, useMemo } from 'react';
import { users } from '../../../data/userData';
import { Role } from '../../../types/user';

type FilterType = 'all' | Role;

const Users = () => {
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredUsers = useMemo(() => {
        let filtered = users;

        if (activeFilter !== 'all') {
            filtered = filtered.filter(user => user.role === activeFilter);
        }

        if (searchTerm) {
            filtered = filtered.filter(user =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.id.toString().includes(searchTerm)
            );
        }

        return filtered;
    }, [activeFilter, searchTerm]);

    const filterCounts = useMemo(() => {
        const counts = {
            all: users.length,
            admin: users.filter(u => u.role === 'admin').length,
            sender: users.filter(u => u.role === 'sender').length,
            receiver: users.filter(u => u.role === 'receiver').length,
        };
        return counts;
    }, []);

    const getRoleColor = (role: Role) => {
        switch (role) {
            case 'admin': return 'bg-purple-100 text-purple-800';
            case 'sender': return 'bg-green-100 text-green-800';
            case 'receiver': return 'bg-blue-100 text-blue-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getRoleIcon = (role: Role) => {
        switch (role) {
            case 'admin': return '👨‍💼';
            case 'sender': return '📤';
            case 'receiver': return '📥';
            default: return '👤';
        }
    };

    return (
        <div className="p-4 md:p-6 bg-white rounded-xl min-h-full">
            <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">User Management</h1>
                <p className="text-gray-600">Manage all users in the system</p>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
                <div className="relative max-w-md">
                    <input
                        type="text"
                        placeholder="Search by name, email, or ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Filter Buttons */}
            <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                    {(Object.keys(filterCounts) as FilterType[]).map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${activeFilter === filter
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {filter.charAt(0).toUpperCase() + filter.slice(1)} ({filterCounts[filter]})
                        </button>
                    ))}
                </div>
            </div>

            {/* Users Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Email</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredUsers.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50">
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{user.id}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{user.name}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">{user.email}</td>
                                <td className="px-4 py-4 whitespace-nowrap">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                                        <span className="mr-1">{getRoleIcon(user.role)}</span>
                                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                                    </span>
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                                    <div className="flex space-x-2">
                                        <button className="text-blue-600 hover:text-blue-900">Edit</button>
                                        <button className="text-red-600 hover:text-red-900">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {filteredUsers.length === 0 && (
                <div className="text-center py-12">
                    <div className="text-gray-400 text-lg">No users found</div>
                    <div className="text-gray-500 mt-2">Try adjusting your search or filter criteria</div>
                </div>
            )}

            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-600">
                Showing {filteredUsers.length} of {users.length} users
            </div>
        </div>
    );
};

export default Users;