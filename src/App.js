import './assets/styles/App.css';
import '@fontsource/roboto/300.css'; // Light
import '@fontsource/roboto/400.css'; // Regular
import '@fontsource/roboto/700.css'; // Bold
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <div className='App'>
      <Container>
        <Typography variant='h1'>Hello World!</Typography>
      </Container>
    </div>
  );
}

export default App;
