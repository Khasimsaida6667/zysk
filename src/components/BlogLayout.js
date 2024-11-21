import React from 'react';
import './BlogLayout.css';

const BlogLayout = () => {
  return (
    <div className="blog-layout">
      <div className="blog-header">
        <div className='blog-header-text'>
        <h1>Our blog</h1>
        <h1>Latest blog posts</h1>
        <p>Tools and strategies modern teams needs to help their companies grow.</p></div>
        <button className="view-all-btn">View all posts</button>
      </div>
      <div className="blog-posts">
        <div className="blog-post">
          <div className="blog-post-image">
            <img src="./Image.png" alt="Design" />
          </div>
          <div className="blog-post-content">
            <div className="blog-post-category">Design</div>
            <h2 className="blog-post-title">UX review presentations</h2>
            <p className="blog-post-description">
              How do you create compelling presentations that wow your colleagues and impress your managers?
            </p>
            <div className="blog-post-author">
              <img src="./1.jpg" alt="Olivia Rhye" />
              <div className="author-info">
                <h3 className="author-name">Olivia Rhye</h3>
                <p className="publish-date">20 Jan 2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-post-image">
            <img src="./Image (2).png" alt="Product" />
          </div>
          <div className="blog-post-content">
            <div className="blog-post-category">Product</div>
            <h2 className="blog-post-title">Migrating to Linear 101</h2>
            <p className="blog-post-description">
              Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.
            </p>
            <div className="blog-post-author">
              <img src="./7.jpg" alt="Phoenix Baker" />
              <div className="author-info">
                <h3 className="author-name">Phoenix Baker</h3>
                <p className="publish-date">19 Jan 2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-post-image">
            <img src="./Image (1).png" alt="Software Engineering" />
          </div>
          <div className="blog-post-content">
            <div className="blog-post-category">Software Engineering</div>
            <h2 className="blog-post-title">Building your API stack</h2>
            <p className="blog-post-description">
              The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.
            </p>
            <div className="blog-post-author">
              <img src="./47.jpg" alt="Lana Steiner" />
              <div className="author-info">
                <h3 className="author-name">Lana Steiner</h3>
                <p className="publish-date">18 Jan 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;