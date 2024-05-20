import { useState } from 'react';
import useData from '../../../../hooks/useData';
import checkFormData from '../../../../utils/checkFormData';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import avatars from '../../../../assets/images/avatar/avatars';

function EditViewModal({ isEditModalOpen, setIsEditModalOpen, editedUser }) {
  const { users, setUsers, setError } = useData();
  const [editFormData, setEditFormData] = useState(editedUser);

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  const handleEditForm = (event) => {
    event.preventDefault();

    // Username available check
    if (editedUser.id === editFormData.id) {
      const updatedUsers = users.map((user) =>
        user.id === editedUser.id ? editFormData : user
      );
      setUsers(updatedUsers);
      setError(false);
    } else {
      let isIdTaken = checkFormData(users, editFormData);
      if (isIdTaken) {
        setError(true);
      } else {
        const updatedUsers = users.map((user) =>
          user.id === editedUser.id ? editFormData : user
        );
        setUsers(updatedUsers);
        setError(false);
      }
    }
    handleEditModalClose();
  };

  const handleTextFields = (event) => {
    setEditFormData({
      ...editFormData,
      [event.target.name]: event.target.value
    });
  };

  const handleAvatarClick = (avatarId) => {
    setEditFormData({ ...editFormData, avatarId });
  };

  return (
    <>
      <Dialog
        open={isEditModalOpen}
        onClose={handleEditModalClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleEditForm
        }}>
        <DialogTitle sx={{ textAlign: 'center' }}>USER FORM</DialogTitle>
        <DialogContent>
          <TextField
            size='small'
            autoFocus
            margin='dense'
            id='fullName'
            name='fullName'
            label='Full Name'
            type='text'
            fullWidth
            variant='outlined'
            value={editFormData.fullName}
            onChange={handleTextFields}
          />
          <TextField
            size='small'
            margin='dense'
            id='id'
            name='id'
            label='Username'
            type='text'
            fullWidth
            variant='outlined'
            value={editFormData.id}
            onChange={handleTextFields}
          />
          <TextField
            size='small'
            margin='dense'
            id='email'
            name='email'
            label='Email Address'
            type='email'
            fullWidth
            variant='outlined'
            value={editFormData.email}
            onChange={handleTextFields}
          />
          <TextField
            size='small'
            select
            margin='dense'
            id='role'
            name='role'
            label='Role'
            fullWidth
            variant='outlined'
            value={editFormData.role}
            onChange={handleTextFields}>
            <MenuItem value='Administrator'>Administrator</MenuItem>
            <MenuItem value='Author'>Author</MenuItem>
            <MenuItem value='Contributor'>Contributor</MenuItem>
            <MenuItem value='Subscriber'>Subscriber</MenuItem>
          </TextField>
          <p style={{ color: '#82868C', fontWeight: '600' }}>Select Avatar</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {avatars.map((avatar, index) => (
              <Button
                key={index}
                onClick={() => handleAvatarClick(index)}
                style={{
                  margin: 4,
                  border:
                    editFormData.avatarId === index
                      ? '2px solid #007bff'
                      : '2px solid transparent'
                }}>
                <img
                  src={avatar}
                  alt={`Avatar ${index}`}
                  style={{ width: 50, height: 50 }}
                />
              </Button>
            ))}
          </div>
        </DialogContent>
        <DialogActions
          sx={{
            width: '100%'
          }}>
          <Button
            sx={{
              margin: '0 auto 1rem',
              padding: '0.5rem 1.5rem'
            }}
            variant='contained'
            type='submit'>
            Create User
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditViewModal;
