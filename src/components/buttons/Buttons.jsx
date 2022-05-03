import React from 'react';
import CustomDivider from '../custom-divider/CustomDivider';
import AntdButtons from './antd-buttons/AntdButtons';
import ChakraButtons from './chakra-buttons/ChakraButtons';
import MuiButtons from './mui-buttons/MuiButtons';

const Buttons = () => {
  return (
    <div>
      <CustomDivider bg="primary" title="BUTTON" />
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
      <ChakraButtons />
    </div>
  );
};

export default Buttons;
