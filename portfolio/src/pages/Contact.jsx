import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-neutral-900 mb-8">Contact</h1>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Get In Touch</h2>
          <p className="text-neutral-700 leading-relaxed mb-6">
            I'm always interested in discussing new opportunities, collaborations, 
            and innovative projects. Feel free to reach out!
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Email</h3>
              <a 
                href="mailto:harshhaa03@gmail.com" 
                className="text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                harshhaa03@gmail.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/harshhaa-vardhan-reddy" 
                className="text-neutral-700 hover:text-neutral-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/harshhaa-vardhan-reddy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;