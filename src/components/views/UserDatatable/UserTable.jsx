import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function UserTable() {
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const users = [
    {
      id: 1,
      avatar: 'https://example.com/avatar1.jpg',
      name: 'John Doe',
      username: 'johndoe',
      email: 'johndoe@example.com',
      role: 'Admin'
    },
    {
      id: 2,
      avatar: 'https://example.com/avatar2.jpg',
      name: 'Jane Smith',
      username: 'janesmith',
      email: 'janesmith@example.com',
      role: 'User'
    },
    {
      id: 3,
      avatar: 'https://example.com/avatar1.jpg',
      name: 'John Doe',
      username: 'johndoe',
      email: 'johndoe@example.com',
      role: 'Admin'
    },
    {
      id: 4,
      avatar: 'https://example.com/avatar2.jpg',
      name: 'Jane Smith',
      username: 'janesmith',
      email: 'janesmith@example.com',
      role: 'User'
    },
    {
      id: 5,
      avatar: 'https://example.com/avatar1.jpg',
      name: 'John Doe',
      username: 'johndoe',
      email: 'johndoe@example.com',
      role: 'Admin'
    },
    {
      id: 6,
      avatar: 'https://example.com/avatar2.jpg',
      name: 'Jane Smith',
      username: 'janesmith',
      email: 'janesmith@example.com',
      role: 'User'
    }
  ];

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#F5F5F7' }}>
            <TableCell sx={{ padding: '0 16px' }}>
              <Checkbox checked={selectAll} onChange={handleSelectAll} />
            </TableCell>
            <TableCell>Avatar</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>
                <Avatar src={user.avatar} />
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <IconButton>
                  <EditIcon />
                </IconButton>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserTable;
