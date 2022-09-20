import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar'
import { ThemeProvider } from '@mui/material/styles';
import LiberTheme from './theme/LibernetixTheme';

function App() {
  return (
    <ThemeProvider theme={LiberTheme}>
      <NavigationBar />
    </ThemeProvider>
  );
}

export default App;
