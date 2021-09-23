import {
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

function RecordsTable({ records }) {
  return (
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
          {records.map(({ id, artist, album, year }) => (
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
  );
}

RecordsTable.propTypes = {
  records: PropTypes.arrayOf(
    PropTypes.exact({
      artist: PropTypes.string.isRequired,
      album: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default RecordsTable;