import React from 'react';
import Hero from '../components/Sections/Hero';
import Career from './Career';

const About = () => {
  return (
    <div>
      <Hero />
      
      {/* Technical Skills Section */}
      <section className="relative items-center box-border caret-transparent flex flex-col isolate justify-center min-h-[800px] w-full overflow-hidden pb-8 px-4 md:px-8 before:accent-auto before:bg-[radial-gradient(rgba(192,132,252,0.3),rgba(167,139,250,0.1),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-neutral-950 before:block before:blur-3xl before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:-z-10 before:border-separate before:inset-0 before:font-geistsans_fb8f2c">
        <div className="items-center box-border caret-transparent flex basis-[0%] flex-col grow px-4">
          <section className="box-border caret-transparent flex flex-col max-w-screen-xl gap-y-4 w-full mx-auto pb-12 scroll-mt-24 md:max-w-screen-lg">
            <div className="relative box-border caret-transparent w-full overflow-hidden px-2 py-12 md:px-0">
              <div className="items-center box-border caret-transparent gap-x-4 flex justify-center mb-6 md:justify-start">
                <img
                  src="https://c.animaapp.com/mgxl2czwGGe9ho/assets/icon-2.svg"
                  alt="Icon"
                  className="text-white box-border caret-transparent h-7 w-7"
                />
                <h2 className="text-4xl font-bold tracking-tight leading-snug break-words font-bold bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent drop-shadow-sm">
                  Technical Skills
                </h2>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Languages & Frameworks */}
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Languages & Frameworks
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Java (8/11/17)', 'Spring Boot', 'Spring MVC', 'Hibernate', 'JPA', 'Python', 'Flask'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Frontend & Web */}
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Frontend & Web
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Angular', 'Vue.js', 'Node.js', 'JavaScript (ES6+)', 'TypeScript', 'Bootstrap', 'SCSS', 'jQuery'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* APIs & Messaging */}
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    APIs & Messaging
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['REST', 'SOAP', 'Kafka', 'Redis', 'IBM MQ', 'Apache Camel'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Databases */}
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Databases
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['PostgreSQL', 'MySQL', 'Oracle PL/SQL', 'Cassandra'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cloud & Infrastructure */}
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                    Cloud & Infrastructure
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['AWS (EC2, RDS, EKS, Lambda, S3, CloudWatch)', 'Microsoft Azure', 'Docker', 'Kubernetes (EKS/AKS)', 'Helm', 'ArgoCD'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CI/CD & Tools */}
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    CI/CD & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Jenkins', 'GitLab', 'GitHub Actions', 'Maven', 'Terraform', 'Ansible'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm border border-red-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>


      <Career />
    </div>
  );
};

export default About;