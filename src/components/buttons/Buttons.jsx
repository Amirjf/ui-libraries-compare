import React from 'react';
import CustomDivider from '../custom-divider/CustomDivider';
import InnerSection from '../input-section/InnerSection';
import AntdButtons from './antd-buttons/AntdButtons';
import ChakraButtons from './chakra-buttons/ChakraButtons';
import MuiButtons from './mui-buttons/MuiButtons';

const Buttons = () => {
  return (
    <div>
      <CustomDivider bg="primary" title="BUTTON" />
      <InnerSection title="AntD Buttons">
        <AntdButtons />
      </InnerSection>
      <InnerSection title="Mui Buttons">
        <MuiButtons />
      </InnerSection>
      <InnerSection title="Chakra Buttons">
        <ChakraButtons />
      </InnerSection>
    </div>
  );
};

export default Buttons;
