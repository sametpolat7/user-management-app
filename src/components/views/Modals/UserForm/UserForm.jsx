import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import avatars from '../../../../assets/images/avatar/avatars';

function UserForm({
  isAddModalOpen,
  handleAddModalClose,
  handleTextFields,
  handleAvatarClick,
  handleSendForm,
  formData
}) {
  return (
    <>
      <Dialog
        open={isAddModalOpen}
        onClose={handleAddModalClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSendForm
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
            value={formData.fullName}
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
            value={formData.id}
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
            value={formData.email}
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
            value={formData.role}
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
                    formData.avatarId === index
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

export default UserForm;
