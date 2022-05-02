import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { UserAddOutlined } from '@ant-design/icons';

const ChakraCheckBox = () => {
  return (
    <ChakraProvider>
      <div className="grid grid-cols-6 my-4">
        <span className="text-bold text-xl flex items-center">Chakra Ui :</span>
        <Checkbox defaultChecked>Label</Checkbox>
        <Checkbox isDisabled>Label</Checkbox>
        <Checkbox colorScheme="red" defaultChecked>
          Checkbox
        </Checkbox>
        <Checkbox checked icon={<UserAddOutlined />} colorScheme="cyan">
          Label
        </Checkbox>
      </div>
    </ChakraProvider>
  );
};

export default ChakraCheckBox;
