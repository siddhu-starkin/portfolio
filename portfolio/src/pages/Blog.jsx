import React from 'react';

const Blog = () => {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-neutral-900 mb-8">Blog</h1>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Latest Posts</h2>
          <p className="text-neutral-700 leading-relaxed">
            Check out my latest articles on DevOps, cloud computing, and automation. 
            I share insights, tutorials, and best practices from my experience in 
            building scalable infrastructure.
          </p>
          <div className="mt-6">
            <a 
              href="https://blog.notharshhaa.site/" 
              className="inline-flex items-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Visit My Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;