import { ChakraProvider, ListItem, List, ListIcon } from '@chakra-ui/react';
import { CheckBoxOutlineBlank } from '@mui/icons-material';
import React from 'react';

const ChakraLists = () => {
  return (
    <ChakraProvider>
      <div>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={CheckBoxOutlineBlank} color="green.500" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
          <ListItem>
            <ListIcon as={CheckBoxOutlineBlank} color="green.500" />
            Assumenda, quia temporibus eveniet a libero incidunt suscipit
          </ListItem>
          <ListItem>
            <ListIcon as={CheckBoxOutlineBlank} color="green.500" />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem>
            <ListIcon as={CheckBoxOutlineBlank} color="green.500" />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </ListItem>
        </List>
      </div>
    </ChakraProvider>
  );
};

export default ChakraLists;
