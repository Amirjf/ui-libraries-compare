import React from 'react';
import CustomDivider from '../custom-divider/CustomDivider';
import InnerSection from '../input-section/InnerSection';
import AntdAlerts from './antd-alerts/AntdAlerts';
import ChakraAlerts from './chakra-alerts/ChakraAlerts';
import MuiAlerts from './mui-alerts/MuiAlerts';
const Alerts = () => {
  return (
    <div>
      <CustomDivider bg="primary" title="ALERTS" />
      <InnerSection title="Mui Alerts">
        <MuiAlerts />
      </InnerSection>
      <InnerSection title="AntDesign Alerts">
        <AntdAlerts />
      </InnerSection>
      <InnerSection title="Chakra Alerts">
        <ChakraAlerts />
      </InnerSection>
    </div>
  );
};

export default Alerts;
