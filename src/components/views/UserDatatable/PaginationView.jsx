import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

function Pager({ listedUsers, handlePagination }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
      <Pagination
        count={Math.ceil(listedUsers.length / 10)}
        onChange={(event, value) => handlePagination(value)}
        shape='rounded'
        color='primary'
      />
    </Box>
  );
}

export default Pager;
