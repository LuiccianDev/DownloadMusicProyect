import React from 'react';

const SectionSeparator = () => {
  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="h-[100px] overflow-hidden" >
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="M0,100 C150,150 350,50 500,100 L500,150 L0,150 Z"
            stroke="none"
            className="fill-gray-100 dark:fill-gray-950"
          />
        </svg>
      </div>
    </div>
  );
};

export default SectionSeparator;
