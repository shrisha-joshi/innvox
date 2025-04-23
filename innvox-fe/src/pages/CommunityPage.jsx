import React, { useState, useRef, useEffect } from 'react';
import { useChat } from '../context/ChatContext';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CommunityPage = () => {
  const [message, setMessage] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyContent, setReplyContent] = useState('');
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);
  
  const { messages, loading, sendMessage, replyToMessage, deleteMessage } = useChat();
  const { user } = useAuth();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() && !imageFile) return;

    try {
      // In a real app, you would upload the image to a server
      // and get back a URL. For demo, we'll use the base64 string
      const imageUrl = imagePreview;
      
      if (replyingTo) {
        await replyToMessage(replyingTo.id, replyContent, imageUrl);
        setReplyingTo(null);
        setReplyContent('');
      } else {
        await sendMessage(message, imageUrl);
      }

      setMessage('');
      setImageFile(null);
      setImagePreview(null);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
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
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gray-700 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="font-semibold text-white">{msg.username}</span>
                        <span className="text-gray-400 text-sm ml-2">{formatDate(msg.timestamp)}</span>
                      </div>
                      {user && user.uid === msg.userId && (
                        <button
                          onClick={() => deleteMessage(msg.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                    
                    <p className="text-white mb-2">{msg.content}</p>
                    
                    {msg.imageUrl && (
                      <img
                        src={msg.imageUrl}
                        alt="Shared content"
                        className="max-w-full h-auto rounded-lg mb-2"
                      />
                    )}
                    
                    <button
                      onClick={() => setReplyingTo(msg)}
                      className="text-primary hover:text-primary/80 text-sm"
                    >
                      Reply
                    </button>

                    {/* Replies */}
                    {msg.replies.length > 0 && (
                      <div className="mt-4 space-y-4 pl-4 border-l-2 border-gray-600">
                        {msg.replies.map((reply) => (
                          <motion.div
                            key={reply.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-gray-600 rounded-lg p-3"
                          >
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
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Reply Form */}
          {replyingTo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800 rounded-lg p-4 mb-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white">Replying to {replyingTo.username}</h3>
                <button
                  onClick={() => setReplyingTo(null)}
                  className="text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  placeholder="Type your reply..."
                  className="w-full bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  rows="3"
                />
                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="text-primary hover:text-primary/80"
                  >
                    Add Image
                  </button>
                  <button
                    type="submit"
                    className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90"
                  >
                    Send Reply
                  </button>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />
              </form>
            </motion.div>
          )}

          {/* Message Form */}
          {user ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your thoughts with the community..."
                className="w-full bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                rows="3"
              />
              
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
              
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-primary hover:text-primary/80"
                >
                  Add Image
                </button>
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90"
                >
                  Send Message
                </button>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
              />
            </form>
          ) : (
            <div className="text-center bg-gray-800 rounded-lg p-6">
              <p className="text-white mb-4">Please sign in to participate in the community discussion.</p>
              <Link
                to="/login"
                className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunityPage; 