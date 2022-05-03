import React from 'react';
import CustomDivider from '../custom-divider/CustomDivider';
import AntdSelects from './antd-selects/AntdSelects';
import ChakraSelects from './chakra-ui/ChakraSelects';
import MuiSelects from './mui-selects/MuiSelects';

const Selects = () => {
  return (
    <div>
      <CustomDivider bg="primary" title="SELECT" />
      <div className="grid grid-cols-6 pl-4">
        <span className="py-4"></span>
        <span className="py-4">Default</span>
        <span className="py-4">Disabled</span>
        <span className="py-4">With Loading</span>
        <span className="py-4">Search {'&'} Select</span>
        <span className="py-4">Tags</span>
      </div>
      <AntdSelects />
      <MuiSelects />
      <ChakraSelects />
    </div>
  );
};

export default Selects;
