import React, { useEffect, useState } from 'react';

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState({ username: '', email: '', password: '', fullName: '', usn: '' });
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error);
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const createdUser = await response.json();
      setUsers([...users, createdUser]);
      setNewUser({ username: '', email: '', password: '', fullName: '', usn: '' }); // Clear form
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Failed to create user.'); // Basic error feedback
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setUsers(users.filter(user => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user.'); // Basic error feedback
    }
  };

  const handleEditClick = (user) => {
    setEditingUser(user);
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/users/${editingUser._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingUser),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedUser = await response.json();
      setUsers(users.map(user => user._id === updatedUser._id ? updatedUser : user));
      setEditingUser(null); // Clear editing state
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update user.'); // Basic error feedback
    }
  };

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error loading users: {error.message}</div>;
  }

  return (
    <div>
      <h1>Users</h1>

      {/* Create New User Form */}
      <h2>Create New User</h2>
      <form onSubmit={handleCreateUser}>
        <input type="text" name="username" placeholder="Username" value={newUser.username} onChange={handleInputChange} required />
        <input type="email" name="email" placeholder="Email" value={newUser.email} onChange={handleInputChange} required />
        <input type="password" name="password" placeholder="Password" value={newUser.password} onChange={handleInputChange} required />
        <input type="text" name="fullName" placeholder="Full Name" value={newUser.fullName} onChange={handleInputChange} />
        <input type="text" name="usn" placeholder="USN" value={newUser.usn} onChange={handleInputChange} />
        <button type="submit">Create User</button>
      </form>

      {/* Users List */}
      <h2>Users List</h2>
      {
        users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user._id}>{user.username} ({user.email})</li>
              <li key={user._id}>
                {user.username} ({user.email})
                <button onClick={() => handleEditClick(user)}>Edit</button>
                <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
              </li>
            ))}
          </ul>
        )
      }

      {/* Edit User Form/Modal (Basic) */}
      {editingUser && (
        <div>
          <h2>Edit User</h2>
          <form onSubmit={handleUpdateUser}>
            <input type="text" name="username" placeholder="Username" value={editingUser.username} onChange={(e) => setEditingUser({...editingUser, username: e.target.value})} required />
            <input type="email" name="email" placeholder="Email" value={editingUser.email} onChange={(e) => setEditingUser({...editingUser, email: e.target.value})} required />
            {/* Password field for editing might require special handling for security */}
            <input type="text" name="fullName" placeholder="Full Name" value={editingUser.fullName} onChange={(e) => setEditingUser({...editingUser, fullName: e.target.value})} />
            <input type="text" name="usn" placeholder="USN" value={editingUser.usn} onChange={(e) => setEditingUser({...editingUser, usn: e.target.value})} />
            <button type="submit">Update User</button>
            <button onClick={() => setEditingUser(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default UsersPage;