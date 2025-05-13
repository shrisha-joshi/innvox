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