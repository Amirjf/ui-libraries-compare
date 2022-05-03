import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  ChakraProvider,
  Stack,
} from '@chakra-ui/react';
import React from 'react';

const ChakraAvatars = () => {
  return (
    <ChakraProvider>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-2">
        <Stack direction="row" spacing={4}>
          <Avatar>
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
          <Avatar>
            <AvatarBadge
              borderColor="papayawhip"
              bg="tomato"
              boxSize="1.25em"
            />
          </Avatar>
        </Stack>
        <AvatarGroup size="md" max={2}>
          <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
          <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        </AvatarGroup>
      </div>
    </ChakraProvider>
  );
};

export default ChakraAvatars;
