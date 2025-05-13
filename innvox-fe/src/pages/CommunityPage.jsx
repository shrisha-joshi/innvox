import React, { useEffect, useState, useRef } from 'react';
// import { useChat } from '../context/ChatContext'; // Removed as we are now using raw WebSocket
// import { useAuth } from '../context/AuthContext'; // Removed as authentication is now handled via JWT in handshake
import { Link } from 'react-router-dom';
import { io } from 'socket.io-client';

const CommunityPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const socketRef = useRef(null);

  // Keep loading state for initial data fetch if you implement it later
  const [sendMessage, setSendMessage] = useState(null); // Initialize sendMessage state

  useEffect(() => {
    // Initialize socket connection
    const token = localStorage.getItem('token');
    socketRef.current = io('http://localhost:5000', {
      query: { token }
    });

    const socket = socketRef.current;

    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
      setError(null);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    socket.on('connect_error', (err) => {
      console.error('WebSocket connection error:', err);
      setError('Failed to connect to the community chat. Please try again later.');
    });

    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Removed image handling as it adds complexity and is not directly related to basic WebSocket communication
  /*
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        //setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  */

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    try {
      if (socketRef.current) {
        socketRef.current.emit('sendMessage', input);
        setInput(''); // Clear input after sending
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Failed to send message. Please try again.');
    }
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  // Placeholder for a simplified sendMessage function for local state update (optional)
  const addMessageToState = (message) => {
    // This function is now just for updating local state when a message is received
    setMessages(prevMessages => [...prevMessages, message]);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto relative"> {/* Added relative for potential positioning */}
          <h1 className="text-4xl font-bold text-white mb-8">Community Hub</h1>
          
          {/* Messages Container */}
          <div className="bg-gray-800 rounded-lg p-4 mb-6 h-[600px] overflow-y-auto">
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((msg) => (
                  <div
                    key={msg.id || Date.now() + Math.random()}
                    className="bg-gray-700 rounded-lg p-4 break-words"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="font-semibold text-white">{msg.username || 'Anonymous'}</span>
                        {/* Display timestamp if available */}
                        {msg.timestamp && <span className="text-gray-400 text-sm ml-2">{formatDate(msg.timestamp)}</span>}
                      </div>
                      {/* Removed delete button logic as it requires more backend implementation */}
                      {/* {user && user.uid === msg.userId && (
                        <button
                          onClick={() => deleteMessage(msg.id)} // Implement deleteMessage function
                          className="text-red-400 hover:text-red-300"
                        >
                          Delete
                        </button>
                      )} */}
                    </div>
                    
                    <p className="text-white mb-2">{msg.content}</p>
                    
                    {/* Removed image display as image sending was removed */}
                    {/*
                    {msg.imageUrl && (
                      <img
                        src={msg.imageUrl}
                        alt="Shared content"
                        className="max-w-full h-auto rounded-lg"
                      />
                    )} */}
                    {/* Removed reply and replies logic for simplicity */}
                    {/*
                    <button
                      onClick={() => setReplyingTo(msg)}
                      className="text-primary hover:text-primary/80 text-sm"
                    >
                      Reply
                    </button>

                    {msg.replies.length > 0 && (
                      <div className="mt-4 space-y-4 pl-4 border-l-2 border-gray-600">
                        {msg.replies.map((reply) => (
                          <div key={reply.id} className="bg-gray-600 rounded-lg p-3">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <span className="font-semibold text-white">{reply.username}</span>
                                <span className="text-gray-400 text-sm ml-2">{formatDate(reply.timestamp)}</span>
                              </div>
                            </div>
                            <p className="text-white mb-2">{reply.content}</p>
                            {reply.imageUrl && (
                              <img
                                src={reply.imageUrl}
                                alt="Shared content"
                                className="max-w-full h-auto rounded-lg"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    )} */}
                  </div>
                ))}
                <div ref={messagesEndRef} /> {/* Empty div to scroll to */}
              </div>
            )}
            <div ref={messagesEndRef} /> {/* Empty div to scroll to */}
          </div>

          {/* Error Display */}
          {error && (
            <div className="bg-red-600 text-white p-4 rounded-lg mb-4">
              {error}
            </div>
          )}

          {/* Message Input Form */}
          {/* Simplified form without image upload and reply functionality for basic WebSocket */}
          {/* {user ? ( */} {/* Re-add user check if needed */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={input} // Use the 'input' state
              onChange={(e) => setInput(e.target.value)}
              placeholder="Share your thoughts with the community..."
              className="w-full bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              rows="3"
            />
            
            {/* Removed image preview and upload button */}
            {/*
            {imagePreview && (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-w-full h-auto rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImageFile(null);
                    setImagePreview(null);
                  }}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                >
                  ×
                </button>
              </div>
            )}
            */}
            
            <div className="flex justify-end items-center"> {/* Align button to the right */}
              {/* Removed Add Image button */}
              {/*
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-primary hover:text-primary/80"
              >
                Add Image
              </button>
              */}
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90"
              >
                Send Message
              </button>
            </div>
            {/* Removed hidden file input */}
            {/*
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
              />
            */}
          </form>
          {/* ) : ( */} {/* Re-add user check if needed */}
          {/* Removed sign-in message */}
          {/*
            <div className="text-center bg-gray-800 rounded-lg p-6">
              <p className="text-white mb-4">Please sign in to participate in the community discussion.</p>
              <Link
                to="/login"
                className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90"
              >
                Sign In
              </Link>
            </div>
          ) */}
        </div>
      </div>
    </div>
  );
};

export default CommunityPage; 