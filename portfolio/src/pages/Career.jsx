import React from 'react';

const Career = () => {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-neutral-900 mb-8">Career</h1>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Professional Experience</h2>
          <p className="text-neutral-700 leading-relaxed">
            As a DevOps Engineer, I specialize in building scalable cloud infrastructures and 
            automating deployment pipelines. My experience spans across AWS, Azure, Terraform, 
            Kubernetes, and Docker technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Career;