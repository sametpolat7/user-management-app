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
import avatars from '../../../assets/images/avatar/avatars';

function UserTable({
  selectedUsers,
  users,
  handleSelectAll,
  handleSelectOne,
  handleEdit,
  handleDelete
}) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#F5F5F7' }}>
            <TableCell sx={{ padding: '0 16px' }}>
              <Checkbox
                checked={selectedUsers.length === users.length}
                onChange={handleSelectAll}
              />
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
            <TableRow
              key={user.id}
              sx={{
                backgroundColor: selectedUsers.includes(user.id)
                  ? '#F5F5F7'
                  : 'transparent'
              }}>
              <TableCell>
                <Checkbox
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => handleSelectOne(user.id)}
                />
              </TableCell>
              <TableCell>
                <Avatar src={avatars[user.avatarId]} variant='rounded' />
              </TableCell>
              <TableCell>{user.fullName}</TableCell>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleEdit(user.id)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(user.id)}>
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
