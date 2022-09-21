import NavigationBar from './components/NavigationBar/NavigationBar'
import MainSection from './components/MainSection/MainSection';
import SolutionsSection from './components/SolutionsSection/SolutionsSection';
import Footer from './components/Footer/Footer'
import { ThemeProvider } from '@mui/material/styles';
import LiberTheme from './theme/LibernetixTheme';

function App() {
  return (
    <ThemeProvider theme={LiberTheme}>
      <NavigationBar />
      <MainSection/>
      <SolutionsSection/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
