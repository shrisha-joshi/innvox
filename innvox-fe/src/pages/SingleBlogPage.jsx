import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

const SingleBlogPage = () => {
  const { id } = useParams();
  const { posts } = useBlog();

  // Sample blog post for demonstration
  const samplePost = {
    id: 1,
    title: 'Getting Started with React',
    content: `
      <p>React is a popular JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by a community of developers.</p>
      
      <h2>Why React?</h2>
      <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Component-based architecture</li>
        <li>Virtual DOM for efficient updates</li>
        <li>Unidirectional data flow</li>
        <li>JSX syntax</li>
        <li>Rich ecosystem</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To start using React, you can either set up a new project using Create React App or add React to an existing project.</p>
      
      <h3>Using Create React App</h3>
      <pre><code>npx create-react-app my-app
cd my-app
npm start</code></pre>
      
      <h2>Conclusion</h2>
      <p>React is a powerful tool for building modern web applications. Its component-based architecture and efficient rendering make it a popular choice among developers.</p>
    `,
    author: 'John Doe',
    date: 'March 15, 2024',
    category: 'Web Development',
    image: '/assets/blog-1.jpg'
  };

  const post = posts.find(p => p.id === parseInt(id)) || samplePost;

  return (
    <div className="single-blog-page">
      <div className="container">
        <article className="blog-post">
          <div className="blog-header">
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="blog-meta">
              <span className="author">By {post.author}</span>
              <span className="date">{post.date}</span>
            </div>
          </div>
          <div className="blog-image">
            <img src={post.image} alt={post.title} />
          </div>
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="blog-footer">
            <Link to="/blog" className="btn btn-secondary">
              Back to Blog
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default SingleBlogPage; 