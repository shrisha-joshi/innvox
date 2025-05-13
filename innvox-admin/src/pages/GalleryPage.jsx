<<<<<<< HEAD
=======
import React, { useEffect, useState } from 'react';

function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newNotification, setNewNotification] = useState({ recipient: '', message: '' });
  const [editingNotification, setEditingNotification] = useState(null);

  useEffect(() => {
    fetchNotifications();40 |        // Add the new message to the state
41 |        setMessages((prevMessages) => [...prevMessages, message]);
42 |      } // Remove the semicolon here
43 |  
44 |      return () => {
setMessages((prevMessages) => [...prevMessages, message]);
    } // No semicolon here

  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await fetch('/api/notifications');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setNotifications(data);
    } catch (error) {
      setError(error);
      console.error('Error fetching notifications:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setNewNotification({ ...newNotification, [e.target.name]: e.target.value });
  };

  const handleCreateNotification = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/notifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNotification),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const createdNotification = await response.json();
      setNotifications([...notifications, createdNotification]);
      setNewNotification({ recipient: '', message: '' }); // Clear form
    } catch (error) {
      console.error('Error creating notification:', error);
      alert('Failed to create notification.'); // Basic error feedback
    }
  };

  const handleDeleteNotification = async (notificationId) => {
    try {
      const response = await fetch(`/api/notifications/${notificationId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setNotifications(notifications.filter(notification => notification._id !== notificationId));
    } catch (error) {
      console.error('Error deleting notification:', error);
      alert('Failed to delete notification.'); // Basic error feedback
    }
  };

  const handleEditClick = (notification) => {
    setEditingNotification(notification);
  };

  const handleUpdateNotification = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/notifications/${editingNotification._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingNotification),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }\n\n      const updatedNotification = await response.json();\n      setNotifications(notifications.map(notification => notification._id === updatedNotification._id ? updatedNotification : notification));\n      setEditingNotification(null); // Clear editing state\n    } catch (error) {\n      console.error('Error updating notification:', error);\n      alert('Failed to update notification.'); // Basic error feedback\n    }\n  };\n\n\n  if (loading) {\n    return <div>Loading notifications...</div>;\n  }\n\n  if (error) {\n    return <div>Error loading notifications: {error.message}</div>;\n  }\n\n  return (\n    <div>\n      <h1>Notifications</h1>\n\n      {/* Create New Notification Form */}\n      <h2>Create New Notification</h2>\n      <form onSubmit={handleCreateNotification}>\n        {/* You might want a dropdown or search for recipients */}\n        <input type="text" name="recipient" placeholder="Recipient User ID" value={newNotification.recipient} onChange={handleInputChange} required />\n        <textarea name="message" placeholder="Message" value={newNotification.message} onChange={handleInputChange} required></textarea>\n        <button type="submit">Create Notification</button>\n      </form>\n\n      {/* Notifications List */}\n      <h2>Notifications List</h2>\n      {\n        notifications.length === 0 ? (\n          <p>No notifications found.</p>\n        ) : (\n          <ul>\n            {notifications.map((notification) => (\n              <li key={notification._id}>\n                <p>To: {notification.recipient?.username || notification.recipient}</p>\n                <p>Message: {notification.message}</p>\n                <button onClick={() => handleEditClick(notification)}>Edit</button>\n                <button onClick={() => handleDeleteNotification(notification._id)}>Delete</button>\n              </li>\n            ))}\n          </ul>\n        )\n      }\n\n      {/* Edit Notification Form/Modal (Basic) */}\n      {editingNotification && (\n        <div>\n          <h2>Edit Notification</h2>\n          <form onSubmit={handleUpdateNotification}>\n            {/* You might want a dropdown or search for recipients */}\n            <input type="text" name="recipient" placeholder="Recipient User ID" value={editingNotification.recipient?.username || editingNotification.recipient} onChange={(e) => setEditingNotification({...editingNotification, recipient: e.target.value})} required />\n            <textarea name="message" placeholder="Message" value={editingNotification.message} onChange={(e) => setEditingNotification({...editingNotification, message: e.target.value})} required></textarea>\n            <button type="submit">Update Notification</button>\n            <button onClick={() => setEditingNotification(null)}>Cancel</button>\n          </form>\n        </div>\n      )}\n    </div>\n  );\n}\n\nexport default NotificationsPage;\n
>>>>>>> 5f9f5a34c5ee9b486d6df436903b2c8c88847a23
import React, { useState } from 'react';
import { useNotification } from '../context/NotificationContext';

const GalleryPage = () => {
  const { showNotification } = useNotification();
  const [images, setImages] = useState([
    {
      id: 1,
      title: 'College Campus',
      url: 'https://via.placeholder.com/300x200',
      category: 'campus',
      date: '2024-04-15'
    },
    {
      id: 2,
      title: 'Graduation Ceremony',
      url: 'https://via.placeholder.com/300x200',
      category: 'events',
      date: '2024-03-20'
    }
  ]);

  const handleAddImage = () => {
    showNotification('Add image functionality coming soon', 'info');
  };

  const handleDeleteImage = (id) => {
    showNotification(`Delete image ${id} functionality coming soon`, 'info');
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gallery Management</h1>
        <button
          onClick={handleAddImage}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Add New Image
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={image.url} alt={image.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{image.title}</h3>
              <p className="text-sm text-gray-500 mt-1">Category: {image.category}</p>
              <p className="text-sm text-gray-500">Date: {image.date}</p>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => handleDeleteImage(image.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage; 