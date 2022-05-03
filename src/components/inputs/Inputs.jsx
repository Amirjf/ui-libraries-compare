import React from 'react';
import InputSection from '../input-section/InputSection';
import SectionHeading from '../section-heading/SectionHeading';
import AntdInputs from './antd-inputs/AntdInputs';
import MuiInputs from './mui-inputs/MuiInputs';

const Inputs = () => {
  return (
    <div>
      <SectionHeading title="INPUTS" />
      <InputSection title="MUI">
        <MuiInputs />
      </InputSection>
      <InputSection title="ANT Design">
        <AntdInputs />
      </InputSection>
    </div>
  );
};

export default Inputs;
