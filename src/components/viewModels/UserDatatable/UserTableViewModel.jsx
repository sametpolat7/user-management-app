import React, { useEffect, useState } from 'react';
import useData from '../../../hooks/useData';
import UserTable from '../../views/UserDatatable/UserTable';
import DeleteViewModel from '../Modals/DeleteModal/DeleteViewModel';
import PaginationView from '../../views/UserDatatable/PaginationView';
import EditViewModal from '../Modals/EditModal/EditViewModal';

function UserTableViewModel() {
  const { users, setUsers, listedUsers } = useData();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteConfirm, setIsDeleteConfirm] = useState(false);
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  let pageSize = 10;
  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const displayedUsers = listedUsers.slice(startIndex, endIndex);
    // Set the displayed users for the current page
    setDisplayedUsers(displayedUsers);
  }, [currentPage, listedUsers]);

  const handlePagination = (currPage) => {
    setCurrentPage(currPage);
  };

  // Trigger deletion of all users with confirmation from the user (DeleteModal).
  useEffect(() => {
    if (isDeleteConfirm) {
      confirmedDeleteAll(selectedUsers);
    }
  }, [isDeleteConfirm]);

  const handleDeleteOne = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleDeleteAll = () => {
    setIsDeleteModalOpen(true);
  };

  const confirmedDeleteAll = (selectedUsers) => {
    const updatedUsers = users.filter(
      (user) => !selectedUsers.includes(user.id)
    );
    setUsers(updatedUsers);
    setIsDeleteModalOpen(false);
    setSelectedUsers([]);
    setIsDeleteConfirm(false);
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

  const handleSelectAll = () => {
    setSelectedUsers(
      selectedUsers.length === listedUsers.length
        ? []
        : listedUsers.map((user) => user.id)
    );
  };

  const handleEdit = (userId) => {
    const userToEdit = users.find((user) => user.id === userId);
    setIsEditModalOpen(true);
    setEditedUser(userToEdit);
  };

  return (
    <React.Fragment>
      <UserTable
        selectedUsers={selectedUsers}
        displayedUsers={displayedUsers}
        handleSelectAll={handleSelectAll}
        handleSelectOne={handleSelectOne}
        handleEdit={handleEdit}
        handleDeleteOne={handleDeleteOne}
        handleDeleteAll={handleDeleteAll}
      />
      <PaginationView
        listedUsers={listedUsers}
        handlePagination={handlePagination}
      />
      {isEditModalOpen && (
        <EditViewModal
          isEditModalOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          editedUser={editedUser}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteViewModel
          isDeleteModalOpen={isDeleteModalOpen}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          setIsDeleteConfirm={setIsDeleteConfirm}
        />
      )}
    </React.Fragment>
  );
}

export default UserTableViewModel;
