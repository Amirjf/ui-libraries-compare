import React from 'react';
import { ChakraProvider, Select } from '@chakra-ui/react';
const ChakraSelects = () => {
  return (
    <ChakraProvider>
      <div className="grid grid-cols-6 my-4">
        <span className="text-bold text-xl flex items-center">Chakra Ui :</span>
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select
          style={{ margin: '0 10px' }}
          placeholder="Select option"
          disabled
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select
          bg="tomato"
          borderColor="tomato"
          color="white"
          placeholder="Woohoo! A new background color!"
        />
      </div>
    </ChakraProvider>
  );
};

export default ChakraSelects;
