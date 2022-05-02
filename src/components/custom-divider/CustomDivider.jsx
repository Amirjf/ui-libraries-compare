import { Center, Divider as ChakraDivider } from '@chakra-ui/react';
import { Chip, Divider as MuiDivider } from '@mui/material';
import React from 'react';

const CustomDivider = ({ vertical, title }) => {
  if (vertical)
    return (
      <Center height="50px">
        <ChakraDivider orientation="vertical" />
      </Center>
    );
  return <MuiDivider>{title ? <Chip label={title} /> : null}</MuiDivider>;
};

export default CustomDivider;
