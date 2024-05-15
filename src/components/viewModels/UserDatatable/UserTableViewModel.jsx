import { useState } from 'react';
import useData from '../../../hooks/useData';
import UserTable from '../../views/UserDatatable/UserTable';

function UserTableViewModel() {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const { listedUsers } = useData();

  const handleSelectAll = () => {
    setSelectedUsers(
      selectedUsers.length === listedUsers.length
        ? []
        : listedUsers.map((user) => user.id)
    );
  };

  const handleSelectOne = (userId) => {
    setSelectedUsers((prev) => {
      if (prev.includes(userId)) {
        return prev.filter((id) => id !== userId);
      } else {
        return [...prev, userId];
      }
    });
  };

  const handleEdit = (userId) => {
    console.log(userId, 'This is edit log');
  };

  const handleDelete = (userId) => {
    console.log(userId, 'This is delete log');
  };

  return (
    <UserTable
      selectedUsers={selectedUsers}
      listedUsers={listedUsers}
      handleSelectAll={handleSelectAll}
      handleSelectOne={handleSelectOne}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
}

export default UserTableViewModel;
