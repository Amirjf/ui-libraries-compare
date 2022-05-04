import React from 'react';
import CustomDivider from '../custom-divider/CustomDivider';
import InnerSection from '../input-section/InnerSection';
import AntdTabs from './antd-tabs/AntdTabs';
import ChakraTabs from './chakra-tabs/ChakraTabs';
import MuiTabs from './mui-tabs/MuiTabs';

const Tabs = () => {
  return (
    <div>
      <CustomDivider bg="primary" title="TABS" />
      <InnerSection title="Mui Tabs">
        <MuiTabs />
      </InnerSection>
      <InnerSection title="AntDesign Tabs">
        <AntdTabs />
      </InnerSection>
      <InnerSection title="Chakra Tabs">
        <ChakraTabs />
      </InnerSection>
    </div>
  );
};

export default Tabs;
