import { MailFilled, SearchOutlined } from '@ant-design/icons';
import { Button, IconButton } from '@chakra-ui/react';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

const ChakraButtons = () => {
  return (
    <ChakraProvider>
      <div className="grid grid-cols-6 my-4">
        <span className="text-bold text-xl flex items-center">Chakra Ui :</span>
        <div>
          <Button colorScheme="blue">Button</Button>
        </div>
        <div>
          <Button colorScheme="teal" variant="ghost">
            Button
          </Button>
        </div>
        <div>
          <Button
            className="mx-2"
            leftIcon={<MailFilled />}
            colorScheme="teal"
            variant="solid"
          >
            Email
          </Button>
          <IconButton
            colorScheme="blue"
            aria-label="Search database"
            icon={<SearchOutlined />}
          />
        </div>

        <div>
          <Button colorScheme="teal" variant="outline">
            Button
          </Button>
        </div>
        <div>
          <Button colorScheme="red">Primary</Button>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default ChakraButtons;
