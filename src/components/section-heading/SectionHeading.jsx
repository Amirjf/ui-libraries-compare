import React from 'react';
import CustomDivider from '../custom-divider/CustomDivider';

const SectionHeading = ({ title }) => {
  return (
    <div className="my-5">
      <CustomDivider title={title} />
    </div>
  );
};

export default SectionHeading;
