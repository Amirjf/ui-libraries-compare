import React from 'react';
import CustomDivider from '../custom-divider/CustomDivider';
import InnerSection from '../input-section/InnerSection';
import MuiTable from './mui-table/MuiTable';

const Tables = () => {
  return (
    <div>
      <CustomDivider title="TABLE" bg="primary" />
      <InnerSection title="Mui Table">
        <MuiTable />
      </InnerSection>
    </div>
  );
};

export default Tables;
