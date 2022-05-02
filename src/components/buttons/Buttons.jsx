import React from 'react';
import SectionHeading from '../section-heading/SectionHeading';
import AntdButtons from './antd-buttons/AntdButtons';
import MuiButtons from './mui-buttons/MuiButtons';

const Buttons = () => {
  return (
    <div>
      <SectionHeading title="BUTTON" />
      <div className="grid grid-cols-6 pl-4">
        <span className="py-4"></span>
        <span className="py-4">Primary</span>
        <span className="py-4">Default</span>
        <span className="py-4">With Icon</span>
        <span className="py-4">OutLine</span>
        <span className="py-4">Danger</span>
      </div>
      <AntdButtons />
      <MuiButtons />
    </div>
  );
};

export default Buttons;
