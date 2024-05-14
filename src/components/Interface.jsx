import React, { useState } from 'react';
import db from '../model/data/db.json';
import UsersContext from '../context/UsersContext';
import Container from '@mui/material/Container';
import NavbarViewModel from './viewModels/UserDatatable/NavbarViewModel';
import SearchBarViewModel from './viewModels/UserDatatable/SearchBarViewModel';
import UserTableViewModel from './viewModels/UserDatatable/UserTableViewModel';

function Interface() {
  const users = db.users;

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  const filteredUsers = () => {
    switch (activeTab) {
      case 0:
        return users;
      case 1:
        return users.filter((user) => user.role === 'Contributor');
      case 2:
        return users.filter((user) => user.role === 'Author');
      case 3:
        return users.filter((user) => user.role === 'Administrator');
      case 4:
        return users.filter((user) => user.role === 'Subscriber');
      default:
        return users;
    }
  };

  const commonData = {
    users,
    filteredUsers
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
