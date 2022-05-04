import React from 'react';
import CustomDivider from '../custom-divider/CustomDivider';
import InnerSection from '../input-section/InnerSection';
import MuiTabs from './mui-tabs/MuiTabs';

const Tabs = () => {
  return (
    <div>
      <CustomDivider bg="primary" title="TABS" />
      <InnerSection title="Mui Tabs">
        <MuiTabs />
      </InnerSection>
    </div>
  );
};

export default Tabs;
