import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'; // THIS IS NEW
import { ReactQueryDevtools } from 'react-query/devtools';      // THIS IS NEW
import './index.css';
import { Header, Footer } from 'components';
import { HomePage,  } from 'pages';

const queryClient = new QueryClient();                          // THIS IS NEW

function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>      { /* THIS IS NEW */}
        <Header />
        <HomePage />
        {/* <Single /> */}
        <Footer />
        <ReactQueryDevtools initialIsOpen={false} />  { /* THIS IS NEW */}
      </QueryClientProvider>                          { /* THIS IS NEW */}
    </ChakraProvider>
  );
}

export default App;