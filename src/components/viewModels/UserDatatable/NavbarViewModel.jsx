import Navbar from '../../views/UserDatatable/Navbar';

function NavbarViewModel({ activeTab, handleTabChange }) {
  const handleAddUser = () => {
    console.log('Burasi account panelini acacak');
  };

  return (
    <Navbar
      activeTab={activeTab}
      handleTabChange={handleTabChange}
      handleAddUser={handleAddUser}
    />
  );
}

export default NavbarViewModel;
