import { Center, Divider as ChakraDivider } from '@chakra-ui/react';
import { Chip, Divider as MuiDivider } from '@mui/material';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

const CustomDivider = ({ vertical, title, bg, textAlign = 'center' }) => {
  if (vertical)
    return (
      <ChakraProvider>
        <Center height="50px" marginInline={3}>
          <ChakraDivider orientation="vertical" />
        </Center>
      </ChakraProvider>
    );
  return (
    <MuiDivider sx={{ my: 5, py: 3 }} textAlign={textAlign} color={bg}>
      {title ? <Chip color={bg} label={title} /> : null}
    </MuiDivider>
  );
};

export default CustomDivider;
