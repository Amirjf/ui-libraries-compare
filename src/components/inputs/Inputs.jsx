import React from 'react';
import InputSection from '../input-section/InputSection';
import SectionHeading from '../section-heading/SectionHeading';
import MuiInputs from './mui-inputs/MuiInputs';

const Inputs = () => {
  return (
    <div>
      <SectionHeading title="INPUTS" />
      <InputSection title="MUI">
        <MuiInputs />
      </InputSection>
    </div>
  );
};

export default Inputs;
