import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import './index.css';
import { Header } from 'components';    // THIS IS NEW

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />          {/* THIS IS CHANGED */}
    </ChakraProvider>
  );
}

export default App;
