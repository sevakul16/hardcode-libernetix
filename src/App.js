import NavigationBar from './components/NavigationBar/NavigationBar'
import { ThemeProvider } from '@mui/material/styles';
import LiberTheme from './theme/LibernetixTheme';
import { Typography } from '@mui/material';
import MainSection from './components/MainSection/MainSection';
function App() {
  return (
    <ThemeProvider theme={LiberTheme}>
      <NavigationBar />
      <MainSection/>
    </ThemeProvider>
  );
}

export default App;
