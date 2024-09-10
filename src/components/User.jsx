import React, { useState } from 'react';
import Layout from './Layout';

const User = () => {
  // Sample user data
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' },
    { id: 3, name: 'Mark Wilson', email: 'mark@example.com', role: 'User', status: 'Active' },
    { id: 4, name: 'Anna Brown', email: 'anna@example.com', role: 'Moderator', status: 'Active' },
    { id: 5, name: 'Paul Johnson', email: 'paul@example.com', role: 'User', status: 'Inactive' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Filter users based on search input
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="my-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">User Management</h1>

        {/* Search bar */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search users by name or email..."
            className="border p-2 rounded-lg w-full max-w-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-blue-500 text-white p-2 rounded-lg ml-4">Add User</button>
        </div>

        {/* User table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4 text-left font-bold">ID</th>
                <th className="p-4 text-left font-bold">Name</th>
                <th className="p-4 text-left font-bold">Email</th>
                <th className="p-4 text-left font-bold">Role</th>
                <th className="p-4 text-left font-bold">Status</th>
                <th className="p-4 text-left font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
                  <tr key={user.id} className="border-b">
                    <td className="p-4">{user.id}</td>
                    <td className="p-4">{user.name}</td>
                    <td className="p-4">{user.email}</td>
                    <td className="p-4">{user.role}</td>
                    <td className={`p-4 ${user.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                      {user.status}
                    </td>
                    <td className="p-4">
                      <button className="bg-yellow-500 text-white p-2 rounded-lg mr-2">Edit</button>
                      <button className="bg-red-500 text-white p-2 rounded-lg">Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="p-4 text-center text-gray-500">No users found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default User;
