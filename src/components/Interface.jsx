import UsersContext from '../context/UsersContext';
import Container from '@mui/material/Container';
import NavbarViewModel from './viewModels/UserDatatable/Navbar.ViewModel';
import SearchBarViewModel from './viewModels/UserDatatable/SearchBarViewModel';
import UserTableViewModel from './viewModels/UserDatatable/UserTableViewModel';

function Interface() {
  return (
    <UsersContext.Provider>
      <Container>
        <NavbarViewModel />
        <SearchBarViewModel />
        <UserTableViewModel />
      </Container>
    </UsersContext.Provider>
  );
}

export default Interface;
