import React from 'react';
import CustomDivider from '../custom-divider/CustomDivider';
import InnerSection from '../input-section/InnerSection';
import AntdLists from './antd-lists/AntdLists';
import ChakraLists from './chakra-lists/ChakraLists';
import MuiLists from './mui-lists/MuiLists';

const Lists = () => {
  return (
    <div>
      <CustomDivider bg="primary" title="LISTS" />
      <InnerSection title="Mui Lists">
        <MuiLists />
      </InnerSection>
      <InnerSection title="AntDesign Lists">
        <AntdLists />
      </InnerSection>
      <InnerSection title="Chakra Lists">
        <ChakraLists />
      </InnerSection>
    </div>
  );
};

export default Lists;
