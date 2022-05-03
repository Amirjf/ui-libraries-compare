import React from 'react';

const InnerSection = ({ children, title, inputRef }) => {
  return (
    <div className="my-10 relative">
      <h2 className="bg-white absolute -top-6 left-3 p-2 text-2xl font-semibold">
        {title}
      </h2>
      <div className="border-2 border-[#027FFF] p-10">{children}</div>
    </div>
  );
};

export default InnerSection;
