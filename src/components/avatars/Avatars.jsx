import React from 'react';
import CustomDivider from '../custom-divider/CustomDivider';
import InnerSection from '../input-section/InnerSection';
import AntdAvatars from './antd-avatars/AntdAvatars';
import ChakraAvatars from './chakra-avatars/ChakraAvatars';
import MuiAvatars from './mui-avatars/MuiAvatars';

const Avatars = () => {
  return (
    <div>
      <CustomDivider bg="primary" title="AVATAR" />
      <InnerSection title="Mui Avatar">
        <MuiAvatars />
      </InnerSection>
      <InnerSection title="Ant Design Avatar">
        <AntdAvatars />
      </InnerSection>
      <InnerSection title="Chakra Avatar">
        <ChakraAvatars />
      </InnerSection>
    </div>
  );
};

export default Avatars;
