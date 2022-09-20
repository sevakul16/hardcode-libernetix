import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {ReactComponent as DimensionIcon} from './../../Logo/DimensionIcon.svg'

const NavigationBar = () => {
  const navigationItems = ['Home', 'Solutions', 'Company']
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{flexGrow: 1}}>
            <Box sx={{width: 50}}>
              <DimensionIcon style={{fill: 'white'}}/>
            </Box>
          </Box>
          <Box sx={{mr: 5}}>
           {
            navigationItems.map((item, index) => {
              return <Button key={index} variant='text' sx={{color: '#FFFFFF', fontSize: '20px', mr: 2}}>
                {item}
              </Button>
            })
           }
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavigationBar
