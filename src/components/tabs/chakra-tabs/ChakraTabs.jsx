import {
  ChakraProvider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import React from 'react';

const ChakraTabs = () => {
  return (
    <ChakraProvider>
      <div>
        <div className="flex gap-4">
          <Tabs
            width="50%"
            borderRadius={10}
            background="rgba(226,226,226,0.4)"
          >
            <TabList>
              <Tab>One</Tab>
              <Tab>Two</Tab>
              <Tab>Three</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Tabs
            width="50%"
            borderRadius={10}
            background="rgba(226,226,226,0.4)"
            variant="soft-rounded"
            colorScheme="green"
          >
            <TabList>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default ChakraTabs;
