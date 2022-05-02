import { Center, Divider as ChakraDivider } from '@chakra-ui/react';
import { Chip, Divider as MuiDivider } from '@mui/material';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

const CustomDivider = ({ vertical, title }) => {
  if (vertical)
    return (
      <ChakraProvider>
        <Center height="50px">
          <ChakraDivider orientation="vertical" />
        </Center>
      </ChakraProvider>
    );
  return <MuiDivider>{title ? <Chip label={title} /> : null}</MuiDivider>;
};

export default CustomDivider;
