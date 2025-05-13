import React from 'react';
import { Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

const BlogPage = () => {
  const { posts } = useBlog();

  // Sample blog posts for demonstration
  const samplePosts = [
    {
      id: 1,
      title: 'Getting Started with React',
      excerpt: 'Learn the basics of React and how to build your first application.',
      author: 'John Doe',
      date: 'March 15, 2024',
      category: 'Web Development',
      image: '/assets/blog-1.jpg'
    },
    {
      id: 2,
      title: 'Introduction to Machine Learning',
      excerpt: 'A beginner\'s guide to understanding machine learning concepts.',
      author: 'Jane Smith',
      date: 'March 10, 2024',
      category: 'AI & ML',
      image: '/assets/blog-2.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices',
      excerpt: 'Essential security measures every developer should know.',
      author: 'Mike Johnson',
      date: 'March 5, 2024',
      category: 'Cybersecurity',
      image: '/assets/blog-3.jpg'
    }
  ];

  const displayPosts = posts.length > 0 ? posts : samplePosts;

  return (
    <div className="blog-page">
      <div className="container">
        <h1>Blog</h1>
        <div className="blog-grid">
          {displayPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <span className="blog-category">{post.category}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="blog-meta">
                  <span className="author">By {post.author}</span>
                  <span className="date">{post.date}</span>
                </div>
                <Link to={`/blog/${post.id}`} className="btn btn-secondary">
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage; 