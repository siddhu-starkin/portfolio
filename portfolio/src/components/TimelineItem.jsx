import React from 'react';
import { Link } from 'react-router-dom';

const TimelineItem = ({ company, workType, position, period, responsibilities, link, isFirst = false, showViewButton = false }) => {
  return (
    <li className="box-border caret-transparent ml-[30px]">
      <div className="relative box-border caret-transparent border-gray-600 pl-8 border-l-2 border-solid">
        <div
          className={`absolute bg-white shadow-4xl box-border caret-transparent h-4 w-4 mt-2.5 rounded-full border-2 border-solid border-gray-800 -left-2.5 ${isFirst ? "md:shadow-3xl" : ""}`}
        ></div>
        <div className="backdrop-blur-xl bg-black/80 shadow-lg box-border caret-transparent border border-black/40 p-6 rounded-2xl border-solid">
          <div className="items-center box-border caret-transparent gap-x-3 flex mb-4">
            <h3 className="text-2xl font-bold tracking-tight leading-snug break-words font-bold bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent drop-shadow-sm">
              {company}
            </h3>
            <div className="box-border caret-transparent">
              <div className="text-white text-xs font-semibold items-center backdrop-blur bg-white/15 shadow-lg box-border caret-transparent inline-flex leading-4 border border-white/20 px-3 py-1 rounded-full border-solid">
                {workType}
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent mb-5">
            <h4 className="text-white text-lg font-semibold items-center box-border caret-transparent gap-x-2 flex leading-7 gap-y-2 text-pretty">
              <span className="box-border caret-transparent block">
                {position}
              </span>
            </h4>
            <time className="text-white/80 text-xs box-border caret-transparent block leading-3 mt-0.5 mb-1 font-mono">
              {period}
            </time>
            <ul className="text-white/90 text-sm box-border caret-transparent leading-5 list-disc mt-1 pl-4 font-mono">
              {responsibilities.map((responsibility, index) => (
                <li
                  key={index}
                  className={`box-border caret-transparent ${index > 0 ? "mt-1" : ""}`}
                >
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
          {showViewButton && (
            <div className="box-border caret-transparent inline-block mt-2">
              <Link
                to={link}
                className="text-black text-sm font-semibold items-center backdrop-blur-md bg-white shadow-lg box-border caret-transparent gap-x-2 flex justify-center leading-5 gap-y-2 text-nowrap border border-white/20 px-5 py-2 rounded-full border-solid hover:bg-white/20 hover:shadow-xl transition-all duration-300"
              >
                <span className="box-border caret-transparent block text-nowrap">
                  View Details
                </span>
                <span className="box-border caret-transparent block text-nowrap ml-2">
                  <svg className="box-border caret-transparent h-4 text-nowrap w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default TimelineItem;