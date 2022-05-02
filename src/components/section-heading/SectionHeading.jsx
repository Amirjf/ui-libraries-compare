import React from 'react';
import CustomDivider from '../custom-divider/CustomDivider';

const SectionHeading = ({ title }) => {
  return (
    <div className="pt-14 pb-10">
      <CustomDivider title={title} />
    </div>
  );
};

export default SectionHeading;
