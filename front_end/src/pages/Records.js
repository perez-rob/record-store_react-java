import { Text } from '@chakra-ui/react';
import api from "api";
import { Table, Form } from 'components/records'; 
import { useQuery, useQueryClient, useMutation } from 'react-query';  // THIS HAS CHANGED

const fetchRecords = async () => await api.index();

function Records() {
  const { status, data, error } = useQuery('records', fetchRecords);

  const queryClient = useQueryClient();         // THIS IS NEW

  const addRecord = useMutation(payload => api.create(payload));    // THIS IS NEW

  // THIS HAS CHANGED - It used to just console log the event
  const handleSubmit = event => {
    event.preventDefault();
    addRecord.mutate(Object.fromEntries(new FormData(event.target)), {
      onSuccess: () => {
        queryClient.invalidateQueries('records');
      },
    });
  };

  switch (status) {
    case 'loading':
      return <Text>Loading...</Text>;
    case 'error':
      return <Text color="tomato">{error.message}</Text>;
    default:
      return (
        <main className="container mx-auto">
          <Table records={data} />
          <Form handler={handleSubmit} />
        </main>
      );
  }
}

export default Records;