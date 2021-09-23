import api from "api";
import { useQuery } from 'react-query';
import { Table } from 'components/records';   // THIS IS NEW
import { Text } from '@chakra-ui/react';      // THIS IS CHANGED


const fetchRecords = async () => await api.index();

function Records() {
  const { status, data, error } = useQuery('records', fetchRecords);

switch (status) {
    case 'loading':
      return <Text>Loading...</Text>;
    case 'error':
      return <Text color="tomato">{error.message}</Text>;
    default:      // THIS WAS CHANGED to import the new Table component
      return (
        <main className="container mx-auto">
          <Table records={data} />
        </main>
      );
  }
}

export default Records;