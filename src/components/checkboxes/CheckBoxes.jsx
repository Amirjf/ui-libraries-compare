import React from 'react';
import SectionHeading from '../section-heading/SectionHeading';
import AntdCheckbox from './antd-checkbox/AntdCheckbox';
import ChakraCheckBox from './chakra-checkbox/ChakraCheckBox';
import MuiCheckBox from './mui-chekbox/MuiCheckBox';

const CheckBoxes = () => {
  return (
    <div>
      <SectionHeading title="CHECKBOX" />
      <div className="grid grid-cols-6 pl-4">
        <span className="py-4"></span>
        <span className="py-4">Default</span>
        <span className="py-4">Disabled</span>
        <span className="py-4">Colorful</span>
        <span className="py-4">Icon Checkbox</span>
        <span className="py-4">-</span>
      </div>
      <ChakraCheckBox />
      <MuiCheckBox />
      <AntdCheckbox />
    </div>
  );
};

export default CheckBoxes;
