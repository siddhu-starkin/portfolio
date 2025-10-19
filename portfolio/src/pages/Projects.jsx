import React from 'react';

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-neutral-900 mb-8">Projects</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">Cloud Infrastructure</h3>
            <p className="text-neutral-700 leading-relaxed">
              Automated deployment pipelines using Terraform and Kubernetes for scalable applications.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">DevOps Automation</h3>
            <p className="text-neutral-700 leading-relaxed">
              CI/CD pipelines and monitoring solutions for high-performance applications.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">Learning Resources</h3>
            <p className="text-neutral-700 leading-relaxed">
              Comprehensive guides and cheat sheets for DevOps engineers at all levels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;