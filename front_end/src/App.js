import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import './index.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box></Box>
    </ChakraProvider>
  );
}

export default App;
