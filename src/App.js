import NavigationBar from './components/NavigationBar/NavigationBar'
import MainSection from './components/MainSection/MainSection';
import Footer from './components/Footer/Footer'
import { ThemeProvider } from '@mui/material/styles';
import LiberTheme from './theme/LibernetixTheme';
import { Typography } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={LiberTheme}>
      <NavigationBar />
      <MainSection/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
