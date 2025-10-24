import React from 'react';
import { Link } from 'react-router-dom';

const ExperienceDetail = ({ experience }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <Link 
              to="/career" 
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Career
            </Link>
            <div className="text-sm text-gray-400">
              Experience Details
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Job Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            {experience.title}
          </h1>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                {experience.company}
              </h2>
              <p className="text-lg text-gray-300 mb-1">{experience.location}</p>
              <p className="text-sm text-gray-400">{experience.period}</p>
            </div>
            <div className="flex items-center">
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30">
                {experience.period.includes('Present') ? 'Current' : 'Previous'}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Overview</h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            {experience.description}
          </p>
        </div>

        {/* Detailed Responsibilities */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-white">Key Responsibilities & Achievements</h3>
          <div className="space-y-4">
            {experience.details.map((detail, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors duration-300">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                  {index + 1}
                </div>
                <p className="text-gray-300 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {getTechnologiesForExperience(experience.id).map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-gray-600 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-800">
          <Link 
            to="/career"
            className="flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 border border-gray-700"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Career
          </Link>
          <Link 
            to="/contact"
            className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

// Helper function to get technologies for each experience
const getTechnologiesForExperience = (experienceId) => {
  const technologies = {
    'unitedhealth': [
      'Java 11', 'Spring Boot', 'Spring Data JPA', 'Spring Security', 'JWT', 'Angular 17', 'RxJS',
      'PostgreSQL', 'Redis', 'Kafka', 'JMS', 'AWS EKS', 'Docker', 'Kubernetes', 'Terraform',
      'Jenkins', 'HIPAA', 'HL7/FHIR', 'Hibernate', 'REST APIs', 'Microservices'
    ],
    'cargill': [
      'Java 8', 'Spring MVC', 'Hibernate', 'JPA', 'Oracle Database', 'PL/SQL', 'EJB',
      'Spring IoC', 'SOAP', 'REST APIs', 'Angular 14', 'IBM MQ', 'AWS', 'Terraform',
      'JUnit', 'Mockito', 'Selenium', 'Agile', 'ICE', 'CME'
    ],
    'basf': [
      'Java', 'Spring Boot', 'React', 'Cassandra', 'MySQL', 'Angular.js', 'Node.js',
      'Docker', 'Kubernetes', 'AWS EKS', 'CloudWatch', 'Jenkins', 'GitHub', 'ELK',
      'Prometheus', 'Grafana', 'JEST', 'REST APIs', 'Microservices'
    ],
    'jll': [
      'Java', 'Struts 2', 'Hibernate ORM', 'Oracle DB', 'JDBC', 'SOAP', 'XML', 'HTTP',
      'Pivotal Cloud Foundry', 'Git', 'Maven', 'Jenkins', 'JSP', 'JSTL', 'JavaScript',
      'TDD', 'DAO Pattern', 'Strategy Pattern', 'Template Method'
    ]
  };
  
  return technologies[experienceId] || [];
};

export default ExperienceDetail;