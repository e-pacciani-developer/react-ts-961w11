import {
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import React from 'react';
import { useUsers } from './useUsers';

const MyTable: React.FC = () => {
  console.log('Table rendered');
  const { users, addUser, deleteUser } = useUsers();

  return (
    <React.Fragment>
      <Button onClick={() => addUser()}>Add user</Button>
      <Table variant="simple" colorScheme="green">
        <TableCaption placement="top">
          My beautiful User Table with {users.length} users
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Username</Th>
            <Th>Company</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => {
            return (
              <Tr key={user.id}>
                <Td>{user.name}</Td>
                <Td>{user.username}</Td>
                <Td>{user.company.name}</Td>
                <Td>
                  <Button onClick={() => deleteUser(user)}>Del</Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
        {/* <Tfoot>
        <Tr>
          <Th>To convert</Th>
          <Th>into</Th>
          <Th isNumeric>multiply by</Th>
        </Tr>
      </Tfoot> */}
      </Table>
    </React.Fragment>
  );
};

export default MyTable;
