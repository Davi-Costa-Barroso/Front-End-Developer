import {
  ChakraProvider,
  Box
} from '@chakra-ui/react'
import { Header } from './components/Header/Header';
import { Card } from './components/Card';
import { Layout } from './components/Layout';
function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Box minHeight='100vh' backgroundColor='#1e192c' padding='25px'>
          <Card />
        </Box>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
