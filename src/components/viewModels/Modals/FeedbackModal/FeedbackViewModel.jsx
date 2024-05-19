import { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function FeedbackViewModel({ error }) {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [prevError, setPrevError] = useState(null);

  useEffect(() => {
    if (prevError !== error) {
      setIsFeedbackOpen(true);
      setPrevError(error);
    }
  }, [error, prevError]);

  const handleFeedbackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsFeedbackOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={isFeedbackOpen}
        autoHideDuration={5000}
        onClose={handleFeedbackClose}>
        {error ? (
          <Alert
            onClose={handleFeedbackClose}
            variant='filled'
            severity='error'
            sx={{ width: '100%' }}>
            This username has been taken before!
          </Alert>
        ) : (
          <Alert
            onClose={handleFeedbackClose}
            severity='success'
            variant='filled'
            sx={{ width: '100%' }}>
            User successfully created!
          </Alert>
        )}
      </Snackbar>
    </div>
  );
}

export default FeedbackViewModel;
