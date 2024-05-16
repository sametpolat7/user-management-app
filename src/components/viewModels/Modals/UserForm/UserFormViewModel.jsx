import { useState } from 'react';
import UserForm from '../../../views/Modals/UserForm/UserForm';
import User from '../../../../model/User';
import useData from '../../../../hooks/useData';

function UserFormViewModel({ isAddModalOpen, handleAddModalClose }) {
  const resetFormData = new User('', '', '', '', '');
  const { users, setUsers } = useData();
  const [formData, setFormData] = useState(resetFormData);

  const handleTextFields = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleAvatarClick = (avatarId) => {
    setFormData({ ...formData, avatarId });
  };

  const handleSendForm = (event) => {
    event.preventDefault();
    setUsers([...users, formData]);
    handleAddModalClose();
  };
  return (
    <UserForm
      isAddModalOpen={isAddModalOpen}
      handleAddModalClose={handleAddModalClose}
      handleTextFields={handleTextFields}
      handleAvatarClick={handleAvatarClick}
      handleSendForm={handleSendForm}
      formData={formData}
    />
  );
}

export default UserFormViewModel;
