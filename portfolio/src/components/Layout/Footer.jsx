import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="box-border caret-transparent w-full px-4 py-8 md:py-12">
      <div className="items-center backdrop-blur-xl bg-white/80 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent gap-x-8 flex flex-col justify-between max-w-screen-xl gap-y-8 w-full border border-neutral-200/50 mx-auto p-8 rounded-2xl border-solid md:flex-row md:p-10">
        <div className="text-sm font-medium box-border caret-transparent leading-5 text-center md:text-left">
          <p className="text-neutral-700 box-border caret-transparent text-center md:text-left">
            © 2025
            <span className="text-neutral-900/50 box-border caret-transparent text-center mx-2 md:text-left">
              •
            </span>
            <Link
              to="https://link.notharshhaa.site/"
              className="text-transparent font-semibold bg-clip-text bg-[linear-gradient(to_right,rgb(23,23,23),rgba(23,23,23,0.7))] box-border text-center md:text-left"
            >
              H A R S H H A A
            </Link>
            <span className="text-neutral-900/50 box-border caret-transparent text-center mx-2 md:text-left">
              —
            </span>
            <span className="text-neutral-600 box-border caret-transparent text-center md:text-left">
              All rights reserved.
            </span>
          </p>
        </div>
        <div className="text-sm box-border caret-transparent gap-x-4 flex flex-wrap justify-center leading-5 gap-y-2">
          <div className="items-center box-border caret-transparent flex">
            <Link
              aria-label="about"
              to="/"
              className="text-neutral-600 box-border caret-transparent block hover:text-neutral-900"
            >
              About
            </Link>
            <span className="text-neutral-900/30 box-border caret-transparent block mx-2">
              •
            </span>
          </div>
          <div className="items-center box-border caret-transparent flex">
            <Link
              aria-label="career"
              to="/career"
              className="text-neutral-600 box-border caret-transparent block hover:text-neutral-900"
            >
              Career
            </Link>
            <span className="text-neutral-900/30 box-border caret-transparent block mx-2">
              •
            </span>
          </div>
          <div className="items-center box-border caret-transparent flex">
            <Link
              aria-label="blog"
              to="/blog"
              className="text-neutral-600 box-border caret-transparent block hover:text-neutral-900"
            >
              Blog
            </Link>
            <span className="text-neutral-900/30 box-border caret-transparent block mx-2">
              •
            </span>
          </div>
          <div className="items-center box-border caret-transparent flex">
            <Link
              aria-label="projects"
              to="/projects"
              className="text-neutral-600 box-border caret-transparent block hover:text-neutral-900"
            >
              Projects
            </Link>
            <span className="text-neutral-900/30 box-border caret-transparent block mx-2">
              •
            </span>
          </div>
          <div className="items-center box-border caret-transparent flex">
            <Link
              aria-label="contact"
              to="/contact"
              className="text-neutral-600 box-border caret-transparent block hover:text-neutral-900"
            >
              Contact
            </Link>
          </div>
        </div>
        <button
          aria-label="Scroll to top"
          className="text-neutral-900 items-center bg-neutral-900/10 caret-transparent gap-x-2 hidden min-h-0 min-w-0 gap-y-2 text-center px-4 py-2 rounded-lg md:flex md:min-h-[auto] md:min-w-[auto] hover:bg-neutral-900/20"
        >
          <img
            src="https://c.animaapp.com/mgxexrjdNC0nO9/assets/icon-8.svg"
            alt="Icon"
            className="box-border caret-transparent h-4 w-4"
          />
          <span className="text-sm font-medium box-border caret-transparent inline leading-5 min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
            Back to top
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;