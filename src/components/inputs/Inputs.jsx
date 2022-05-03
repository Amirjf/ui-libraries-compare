import React from 'react';
import CustomDivider from '../custom-divider/CustomDivider';
import InnerSection from '../input-section/InnerSection';
import AntdInputs from './antd-inputs/AntdInputs';
import ChakraInputs from './chakra-inputs/ChakraInputs';
import MuiInputs from './mui-inputs/MuiInputs';

const Inputs = ({ inputRef }) => {
  return (
    <div ref={inputRef}>
      <CustomDivider bg="primary" title="INPUTS" />
      <InnerSection title="MUI">
        <MuiInputs />
      </InnerSection>
      <InnerSection title="ANT Design">
        <AntdInputs />
      </InnerSection>
      <InnerSection title="Chakra Ui">
        <ChakraInputs />
      </InnerSection>
    </div>
  );
};

export default Inputs;
