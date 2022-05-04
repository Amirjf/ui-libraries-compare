import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  ChakraProvider,
  CloseButton,
} from '@chakra-ui/react';
import React from 'react';

const ChakraAlerts = () => {
  return (
    <ChakraProvider>
      <div>
        <div className="flex gap-4">
          <div className="w-1/2 flex flex-col gap-4">
            <Alert status="error">
              <AlertIcon />
              There was an error processing your request
            </Alert>

            <Alert status="success">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>

            <Alert status="warning">
              <AlertIcon />
              Seems your account is about expire, upgrade now
            </Alert>

            <Alert status="info">
              <AlertIcon />
              Chakra is going live on August 30th. Get ready!
            </Alert>
            <Alert status="success">
              <AlertIcon />
              <Box>
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                  Your application has been receivd. We will review your
                  application and respond within the next 48 hours.
                </AlertDescription>
              </Box>
              <CloseButton
                alignSelf="flex-start"
                position="relative"
                right={-1}
                top={-1}
              />
            </Alert>
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <Alert status="success" variant="subtle">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>

            <Alert status="success" variant="solid">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>

            <Alert status="success" variant="left-accent">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>

            <Alert status="success" variant="top-accent">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>
            <Alert
              status="success"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="200px"
            >
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                Application submitted!
              </AlertTitle>
              <AlertDescription maxWidth="sm">
                Thanks for submitting your application. Our team will get back
                to you soon.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default ChakraAlerts;
