import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

function DeleteModal({ isDeleteModalOpen, handleClose, handleConfirm }) {
  return (
    <Dialog
      open={isDeleteModalOpen}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'>
      <DialogTitle
        id='alert-dialog-title'
        sx={{
          padding: '2rem'
        }}>
        {'Selected users will be deleted! Do you confirm?'}
      </DialogTitle>
      <DialogActions
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '1rem'
        }}>
        <Button
          sx={{ border: '2px solid #00e676', padding: '0.5rem 1rem' }}
          onClick={handleConfirm}
          autoFocus>
          Confirm!
        </Button>
        <Button
          sx={{ border: '1px solid #f44336', padding: '0.5rem 1rem' }}
          onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteModal;
