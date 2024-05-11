import React, { createContext } from 'react';
import Container from '@mui/material/Container';
import NavbarViewModel from './viewModels/UserDatatable/Navbar.ViewModel';
import SearchBarViewModel from './viewModels/UserDatatable/SearchBarViewModel';

export const UsersContext = createContext();

function Interface() {
  return (
    <UsersContext.Provider>
      <Container>
        <NavbarViewModel />
        <SearchBarViewModel />
      </Container>
    </UsersContext.Provider>
  );
}

export default Interface;
