import { ThemeProvider } from '@mui/material/styles';
import LiberTheme from './theme/LibernetixTheme';
import { Typography } from '@mui/material';
function App() {
  return (
    <ThemeProvider theme={LiberTheme}>
      <NavigationBar />
    </ThemeProvider>
  );
}

export default App;
