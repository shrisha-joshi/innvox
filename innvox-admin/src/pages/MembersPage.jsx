import React, { useState } from 'react';
import { useNotification } from '../context/NotificationContext';

const MembersPage = () => {
  const { showNotification } = useNotification();
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'John Doe',
      role: 'Faculty',
      department: 'Computer Science',
      email: 'john.doe@example.com',
      joinDate: '2023-09-01'
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Student',
      department: 'Engineering',
      email: 'jane.smith@example.com',
      joinDate: '2023-08-15'
    },
    {
      id: 3,
      name: 'Robert Johnson',
      role: 'Staff',
      department: 'Administration',
      email: 'robert.johnson@example.com',
      joinDate: '2023-07-10'
    }
  ]);

  const handleAddMember = () => {
    showNotification('Add member functionality coming soon', 'info');
  };

  const handleEditMember = (id) => {
    showNotification(`Edit member ${id} functionality coming soon`, 'info');
  };

  const handleDeleteMember = (id) => {
    showNotification(`Delete member ${id} functionality coming soon`, 'info');
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Members Management</h1>
        <button
          onClick={handleAddMember}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Add New Member
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Join Date
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {members.map((member) => (
              <tr key={member.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{member.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{member.role}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{member.department}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{member.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{member.joinDate}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleEditMember(member.id)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteMember(member.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MembersPage; 