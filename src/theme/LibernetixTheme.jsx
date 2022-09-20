import { createTheme } from '@mui/material/styles';

const LiberTheme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
      'Orbitron', 
      'sans-serif'
    ].join(',')
  },
  palette: {
    type: 'light',
    primary: {
      main: '#2D185C',
    },
    secondary: {
      main: '#FF325D',
    },
    info: {
      main: '#2196f3',
    },
  },
})

export default LiberTheme