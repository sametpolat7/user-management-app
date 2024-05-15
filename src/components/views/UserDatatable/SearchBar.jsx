import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

function SearchBar({ searchQuery, handleSearch }) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          marginTop: '1rem',
          width: '75%'
        }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          label='Search'
          variant='standard'
          size='small'
          value={searchQuery}
          onChange={handleSearch}
          sx={{ width: '100%' }}
        />
      </Box>
    </>
  );
}

export default SearchBar;
