import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const ChatContext = createContext();

export const useChat = () => {
  return useContext(ChatContext);
};

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  // Load messages from localStorage for demo purposes
  // In a real app, this would be from a backend
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
    setLoading(false);
  }, []);

  // Save messages to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatMessages', JSON.stringify(messages));
    }
  }, [messages]);

  const sendMessage = async (content, imageUrl = null) => {
    if (!user) {
      throw new Error('You must be logged in to send messages');
    }

    const newMessage = {
      id: Date.now(),
      content,
      imageUrl,
      userId: user.uid,
      username: user.displayName || 'Anonymous',
      timestamp: new Date().toISOString(),
      replies: [],
    };

    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  };

  const replyToMessage = async (messageId, content, imageUrl = null) => {
    if (!user) {
      throw new Error('You must be logged in to reply to messages');
    }

    const newReply = {
      id: Date.now(),
      content,
      imageUrl,
      userId: user.uid,
      username: user.displayName || 'Anonymous',
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => prev.map(msg => {
      if (msg.id === messageId) {
        return {
          ...msg,
          replies: [...msg.replies, newReply],
        };
      }
      return msg;
    }));

    return newReply;
  };

  const deleteMessage = (messageId) => {
    if (!user) return;
    
    setMessages(prev => prev.filter(msg => {
      if (msg.id === messageId) {
        return msg.userId === user.uid;
      }
      return true;
    }));
  };

  const value = {
    messages,
    loading,
    sendMessage,
    replyToMessage,
    deleteMessage,
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
}; 