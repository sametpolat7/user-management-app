import React, { useState, useEffect } from 'react';
import database from '../model/data/db.json';
import UsersContext from '../context/UsersContext';
import Container from '@mui/material/Container';
import NavbarViewModel from './viewModels/UserDatatable/NavbarViewModel';
import UserTableViewModel from './viewModels/UserDatatable/UserTableViewModel';
import SearchBarViewModel from './viewModels/UserDatatable/SearchBarViewModel';

function Interface() {
  const initialUsersData = database.users;

  const [users, setUsers] = useState(initialUsersData);
  const [filteredUsersByTab, setFilteredUsersByTab] = useState(users);
  const [listedUsers, setListedUsers] = useState(filteredUsersByTab);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  // Synchronous updating of statuses is guaranteed. (Status updates may not be synchronous.)
  useEffect(() => {
    setFilteredUsersByTab(users);
  }, [users]);

  useEffect(() => {
    setListedUsers(filteredUsersByTab);
  }, [filteredUsersByTab]);

  useEffect(() => {
    filterUsers(activeTab);
  }, [activeTab]);

  const filterUsers = (tabIndex) => {
    if (tabIndex === 0) {
      const allUsers = users;
      setFilteredUsersByTab(allUsers);
    } else if (tabIndex === 1) {
      const contributors = users.filter((user) => user.role === 'Contributor');
      setFilteredUsersByTab(contributors);
    } else if (tabIndex === 2) {
      const authors = users.filter((user) => user.role === 'Author');
      setFilteredUsersByTab(authors);
    } else if (tabIndex === 3) {
      const administrators = users.filter(
        (user) => user.role === 'Administrator'
      );
      setFilteredUsersByTab(administrators);
    } else if (tabIndex === 4) {
      const subscribers = users.filter((user) => user.role === 'Subscriber');
      setFilteredUsersByTab(subscribers);
    } else {
      console.error('Interface');
    }
  };

  const commonData = {
    users,
    setUsers,
    filteredUsersByTab,
    listedUsers,
    setListedUsers
  };

  return (
    <UsersContext.Provider value={commonData}>
      <Container>
        <NavbarViewModel
          activeTab={activeTab}
          handleTabChange={handleTabChange}
        />
        <SearchBarViewModel />
        <UserTableViewModel />
      </Container>
    </UsersContext.Provider>
  );
}

export default Interface;
