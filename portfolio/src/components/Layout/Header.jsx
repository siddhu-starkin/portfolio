import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileNavLink from '../MobileNavLink';

const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed box-border text-white caret-transparent z-50 px-6 top-4 inset-x-0 md:px-8">
      <div className="backdrop-blur-xl  bg-black/80 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent max-w-screen-xl w-full border border-black/50 mx-auto px-6 py-4 rounded-2xl border-solid">
        <div className="items-center box-border caret-transparent flex justify-between">
          <div className="items-center box-border caret-transparent gap-x-8 flex flex-wrap gap-y-8">
            <Link
              aria-label="Logo"
              to="/"
              className="items-center box-border caret-transparent gap-x-3 flex gap-y-3"
            >
              <div className="box-border caret-transparent">
                <img
                  alt="Logo"
                  src="https://c.animaapp.com/mgxexrjdNC0nO9/assets/logo.svg"
                  className="text-transparent aspect-[auto_36_/_36] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border max-w-full w-9 rounded-xl"
                />
              </div>
              <span className="text-transparent text-xl font-bold bg-clip-text bg-[linear-gradient(to_right,rgb(23,23,23),rgba(23,23,23,0.7))] box-border block leading-7 text-white">
                HARSHHAA
              </span>
            </Link>
            <nav className="items-center box-border caret-transparent gap-x-2 hidden min-h-0 min-w-0 gap-y-2 md:flex md:min-h-[auto] md:min-w-[auto]">
              <div className="relative box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                <Link
                  aria-label="about"
                  to="/"
                  className={`relative text-white text-sm font-medium box-border caret-transparent leading-5 px-4 py-2 ${
                    location.pathname === '/' ? 'text-neutral-900' : 'hover:text-neutral-900'
                  }`}
                >
                  About
                  {location.pathname === '/' && (
                    <span className="absolute bg-white box-border caret-transparent block h-0.5 origin-[0%_50%] bottom-1.5 inset-x-4"></span>
                  )}
                </Link>
              </div>
              <div className="relative box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                <Link
                  aria-label="career"
                  to="/career"
                  className={`relative text-sm font-medium box-border caret-transparent leading-5 px-4 py-2 hover:text-neutral-900 ${
                    location.pathname === '/career' ? 'text-neutral-900' : ''
                  }`}
                >
                  Career
                  {location.pathname === '/career' && (
                    <span className="absolute bg-neutral-900 box-border caret-transparent block h-0.5 transform-none origin-[0%_50%] bottom-1.5 inset-x-4"></span>
                  )}
                </Link>
              </div>
              <div className="relative box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                <Link
                  to="/blog"
                  aria-label="blog"
                  className={`relative text-sm font-medium box-border caret-transparent leading-5 px-4 py-2 hover:text-neutral-900 ${
                    location.pathname === '/blog' ? 'text-neutral-900' : ''
                  }`}
                >
                  Blog
                  {location.pathname === '/blog' && (
                    <span className="absolute bg-neutral-900 box-border caret-transparent block h-0.5 transform-none origin-[0%_50%] bottom-1.5 inset-x-4"></span>
                  )}
                </Link>
              </div>
              <div className="relative box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                <Link
                  aria-label="projects"
                  to="/projects"
                  className={`relative text-sm font-medium box-border caret-transparent leading-5 px-4 py-2 hover:text-neutral-900 ${
                    location.pathname === '/projects' ? 'text-neutral-900' : ''
                  }`}
                >
                  Projects
                  {location.pathname === '/projects' && (
                    <span className="absolute bg-neutral-900 box-border caret-transparent block h-0.5 transform-none origin-[0%_50%] bottom-1.5 inset-x-4"></span>
                  )}
                </Link>
              </div>
              <div className="relative box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                <Link
                  aria-label="contact"
                  to="/contact"
                  className={`relative text-sm font-medium box-border caret-transparent leading-5 px-4 py-2 hover:text-neutral-900 ${
                    location.pathname === '/contact' ? 'text-neutral-900' : ''
                  }`}
                >
                  Contact
                  {location.pathname === '/contact' && (
                    <span className="absolute bg-neutral-900 box-border caret-transparent block h-0.5 transform-none origin-[0%_50%] bottom-1.5 inset-x-4"></span>
                  )}
                </Link>
              </div>
            </nav>
          </div>
          <div className="box-border caret-transparent ml-auto">
            <div className="box-border caret-transparent">
              <button className="relative text-sm font-semibold items-center bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] caret-transparent inline-flex h-9 justify-center leading-5 text-center text-nowrap w-9 overflow-hidden p-0 rounded-full hover:text-neutral-900 hover:bg-neutral-900/10 hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px]">
                <div className="absolute box-border caret-transparent text-nowrap">
                  <img
                    src="https://c.animaapp.com/mgxexrjdNC0nO9/assets/icon-1.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-6 text-nowrap w-6"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        <nav className="box-border caret-transparent gap-x-4 flex flex-wrap justify-center gap-y-4 mt-4 md:hidden">
          <MobileNavLink
            label="about"
            href="/"
            text="About"
            linkVariant={location.pathname === '/' ? "text-neutral-900" : "hover:text-neutral-900"}
            spanVariant=""
          />
          <MobileNavLink
            label="career"
            href="/career"
            text="Career"
            linkVariant={location.pathname === '/career' ? "text-neutral-900" : "hover:text-neutral-900"}
            spanVariant="scale-x-0 md:transform-none"
          />
          <MobileNavLink
            label="blog"
            href="/blog"
            text="Blog"
            linkVariant={location.pathname === '/blog' ? "text-neutral-900" : "hover:text-neutral-900"}
            spanVariant="scale-x-0 md:transform-none"
          />
          <MobileNavLink
            label="projects"
            href="/projects"
            text="Projects"
            linkVariant={location.pathname === '/projects' ? "text-neutral-900" : "hover:text-neutral-900"}
            spanVariant="scale-x-0 md:transform-none"
          />
          <MobileNavLink
            label="contact"
            href="/contact"
            text="Contact"
            linkVariant={location.pathname === '/contact' ? "text-neutral-900" : "hover:text-neutral-900"}
            spanVariant="scale-x-0 md:transform-none"
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;