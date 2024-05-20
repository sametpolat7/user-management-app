import { useState } from 'react';
import UserForm from '../../../views/Modals/UserForm/UserForm';
import User from '../../../../model/User';
import useData from '../../../../hooks/useData';
import checkFormData from '../../../../utils/checkFormData';

function UserFormViewModel({ isAddModalOpen, handleAddModalClose }) {
  const resetFormData = new User('', '', '', '', '');
  const { users, setUsers, setError } = useData();
  const [formData, setFormData] = useState(resetFormData);

  const handleTextFields = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleAvatarClick = (avatarId) => {
    setFormData({ ...formData, avatarId });
  };

  const handleSendForm = (event) => {
    event.preventDefault();

    // Username validation
    let isIdTaken = checkFormData(users, formData);

    if (isIdTaken) {
      setError(true);
    } else {
      setUsers([...users, formData]);
      setError(false);
    }
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
