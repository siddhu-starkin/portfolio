import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">Contact</h1>
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-800">
          <h2 className="text-2xl font-semibold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            I'm always interested in discussing new opportunities, collaborations, 
            and innovative projects. Feel free to reach out!
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="font-semibold text-white mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </h3>
              <a 
                href="mailto:nithyasrialeti7@gmail.com" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                nithyasrialeti7@gmail.com
              </a>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="font-semibold text-white mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </h3>
              <a 
                href="https://linkedin.com/in/nithyasri-aleti" 
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/nithyasri-aleti
              </a>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="font-semibold text-white mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Phone
              </h3>
              <a 
                href="tel:+13465586894" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                +1 (346) 558-6894
              </a>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="font-semibold text-white mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
                Location
              </h3>
              <p className="text-gray-300">
                Overland Park, KS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;