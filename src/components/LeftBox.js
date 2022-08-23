import '../styles/App.css';
import { Box, Button, Container, Stack, Typography } from '@mui/material';


function LeftBox() {

  return (
    <Container disableGutters sx={{ backgroundColor: '#191414', width: '70vw', height: '100vh', display: 'flex', flexDirection: 'row-reverse' }}>
      <img src="img/greenTriangle.png" height='128px' width='128px' style={{ marginTop: 'calc(50vh - 64px)', marginRight: '-2px' }} />
      <Container style={{ alignContent: 'center', alignSelf: 'center', marginRight: 'auto', marginLeft: 'auto', width: 'fit-content' }}>
        <Typography color='#f0f0f0' variant='h1' fontWeight='700' style={{ whiteSpace: 'pre-line' }}>
          {'Spotify\nSpotter'}
        </Typography>
        <Button variant='contained' sx={{backgroundColor:'#1DB954', marginTop:'48px', marginLeft:'40%',marginRight:'50%'}}>
          Play
        </Button>
      </Container>
    </Container>
  );
}

export default LeftBox;
