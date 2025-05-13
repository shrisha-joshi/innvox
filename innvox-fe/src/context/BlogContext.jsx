import React, { createContext, useContext, useState } from 'react';

const BlogContext = createContext();

export const useBlog = () => {
  return useContext(BlogContext);
};

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
  };

  const deleteBlog = (blogId) => {
    setBlogs(blogs.filter(blog => blog.id !== blogId));
  };

  const updateBlog = (blogId, updatedBlog) => {
    setBlogs(blogs.map(blog => blog.id === blogId ? { ...blog, ...updatedBlog } : blog));
  };

  const value = {
    blogs,
    addBlog,
    deleteBlog,
    updateBlog
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
}; 