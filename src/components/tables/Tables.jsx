import React from 'react';
import CustomDivider from '../custom-divider/CustomDivider';
import InnerSection from '../input-section/InnerSection';
import AntdTables from './antd-table/AntdTables';
import ChakraTables from './chakra-tables/ChakraTables';
import MuiTable from './mui-table/MuiTable';

const Tables = () => {
  return (
    <div>
      <CustomDivider title="TABLE" bg="primary" />
      <InnerSection title="Mui Tables">
        <MuiTable />
      </InnerSection>
      <InnerSection title="Ant Design Tables">
        <AntdTables />
      </InnerSection>
      <InnerSection title="Chakra Tables">
        <ChakraTables />
      </InnerSection>
    </div>
  );
};

export default Tables;
