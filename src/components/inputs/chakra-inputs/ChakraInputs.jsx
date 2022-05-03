import React from 'react';
import {
  Box,
  Button,
  ChakraProvider,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react';
import { PhoneFilled } from '@ant-design/icons';

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

const ChakraInputs = () => {
  const options = ['react', 'vue', 'svelte'];
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <ChakraProvider>
      <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-6 xl:grid-cols-6 gap-6">
        <Input placeholder="Basic usage" />
        <Input variant="filled" placeholder="Filled" />
        <Input variant="flushed" placeholder="Flushed" />
        <InputGroup>
          <InputLeftAddon children="+234" />
          <Input type="tel" placeholder="phone number" />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<PhoneFilled color="gray.300" />}
          />
          <Input type="tel" placeholder="Phone number" />
        </InputGroup>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Input
          isInvalid
          errorBorderColor="crimson"
          placeholder="Here is a sample placeholder"
        />
        <Switch size="lg" />

        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>

        <HStack {...group}>
          {options.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            );
          })}
        </HStack>
      </div>
    </ChakraProvider>
  );
};

export default ChakraInputs;
