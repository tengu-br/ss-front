import '../styles/App.css';
import { Box, Container, Stack, Typography } from '@mui/material';


function RightBox() {

  return (
    <Container disableGutters sx={{ backgroundColor: '#1DB954', width: '30vw', height: '100vh' }}>
      <img src="img/blackTriangle.png" style={{ marginTop: 'calc(50vh + 64px)', marginLeft: '-2px' }} />
      
    </Container>
  );
}

export default RightBox;
