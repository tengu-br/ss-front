import '../styles/App.css';
import Button from '@mui/material/Button'
import { useState } from 'react'
import { Box, Stack } from '@mui/material';
import LeftBox from './LeftBox'
import RightBox from './RightBox'

function App() {

  return (
    <Box>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 0 }}
      >
        <LeftBox />
        <RightBox />
      </Stack>
    </Box>
  );
}

export default App;
