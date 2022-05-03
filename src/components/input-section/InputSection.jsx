import React from 'react';

const InputSection = ({ children, title }) => {
  return (
    <div className="border-2 border-[#027FFF] relative">
      <h2 className="bg-white p-4 absolute -top-8 text-xl font-semibold">
        {title}
      </h2>
      <div className="m-10">{children}</div>
    </div>
  );
};

export default InputSection;
