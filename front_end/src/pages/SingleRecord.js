import api from "api";
import { useQuery } from 'react-query';
import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  TableCaption,
  Text
} from '@chakra-ui/react';
import { useState } from "react";

const fetchRecords = async (id) => await api.index(id);

function Single() {
  const [queryParam, setQueryParam ] = useState();

  const { status, data, error } = useQuery(`records`, () => fetchRecords(1));

switch (status) {
    case 'loading':
      return <Text>Loading...</Text>;
    case 'error':
      return <Text color="tomato">{error.message}</Text>;
    default:
      return (
        <main className="container mx-auto">
          <input value={queryParam} onChange={setQueryParam}></input>
          <Table variant="simple">
        <TableCaption>Click on any data to edit 📝 it.</TableCaption>
        <Thead>
          <Tr>
            <Th>Artist</Th>
            <Th>Album</Th>
            <Th>Year</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map(({ id, artist, album, year }) => (
            <Tr key={id} data-id={id}>
              <Td>
                {artist}
              </Td>
              <Td>
                {album}
              </Td>
              <Td>
               {year}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </main>
      );
  }
}

export default Single;