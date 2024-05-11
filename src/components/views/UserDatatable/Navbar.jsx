import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import usersNav from '../../../assets/images/icons/usersNav.svg';
import Divider from '@mui/material/Divider';

function Navbar({ value, handleChange }) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: '20px'
        }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={usersNav} alt='Brand Icon' />
          <Typography
            variant='h6'
            sx={{
              fontWeight: 600,
              color: '#3A3C40',
              marginLeft: '1rem'
            }}>
            Users
          </Typography>
        </Box>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none', // Override the default uppercase styling for all tabs
                fontWeight: 600
              }
            }}>
            <Tab label='All Users' />
            <Tab label='Contributor' />
            <Tab label='Author' />
            <Tab label='Administrator' />
            <Tab label='Subscriber' />
          </Tabs>
        </Box>
        <Box>
          <Button
            variant='contained'
            startIcon={<AddIcon />}
            sx={{
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '13px',
              padding: '0.75rem 1rem'
            }}>
            Add New User
          </Button>
        </Box>
      </Box>
      <Divider />
    </>
  );
}

export default Navbar;
