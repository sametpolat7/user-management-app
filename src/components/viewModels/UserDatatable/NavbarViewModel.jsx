import { useState } from 'react';
import Navbar from '../../views/UserDatatable/Navbar';
import UserFormViewModel from '../Modals/UserForm/UserFormViewModel';

function NavbarViewModel({ activeTab, handleTabChange }) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddUser = () => {
    setIsAddModalOpen(true);
  };

  const handleAddModalClose = () => {
    setIsAddModalOpen(false);
  };

  return (
    <>
      <Navbar
        activeTab={activeTab}
        handleTabChange={handleTabChange}
        isAddModalOpen={isAddModalOpen}
        handleAddUser={handleAddUser}
        handleAddModalClose={handleAddModalClose}
      />
      {isAddModalOpen && (
        <UserFormViewModel
          isAddModalOpen={isAddModalOpen}
          handleAddModalClose={handleAddModalClose}
        />
      )}
    </>
  );
}

export default NavbarViewModel;
