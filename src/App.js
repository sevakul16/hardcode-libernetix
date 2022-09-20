import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from '@mui/material/styles';
import LiberTheme from './theme/LibernetixTheme';
import { Typography } from '@mui/material';
function App() {
  return (
    <ThemeProvider theme={LiberTheme}>
      <NavigationBar />
      <Typography sx={{fontFamily: 'Orbitron'}}>Hello world</Typography>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
