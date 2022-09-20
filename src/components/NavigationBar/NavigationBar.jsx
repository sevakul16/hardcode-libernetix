import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Menu, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {ReactComponent as DimensionIcon} from './../../Logo/DimensionIcon.svg'
import { useState } from 'react';

const NavigationBar = () => {
  const navigationItems = [
    {
      name: 'Home'
    },
    {
      name: 'Solutions',
      links: ['Payment Gateway', 'Merchant Dashboard', 'Card Acquiring', 'Anti Fraud System', 'Analytics & Reporting']
    },
    {
      name: 'Company',
      links: ['About', 'Roadmap', 'Contact Us']
    }
  ]
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            navigationItems.map(({name, links}, index) => {
              return (
                <>
                  <Button key={index} variant='text' onClick={handleClick} sx={{color: '#FFFFFF', fontSize: '20px', mr: 2}}>
                  {name}
                  </Button>
                  {
                    links && <Menu anchorEl={anchorEl} open={open} onClose={handleClose} anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}>
                    {
                      links.map((item, index) => {
                        return(
                          <MenuItem key={index} onClick={handleClose}>
                            <Typography textAlign="center">{item}</Typography>
                          </MenuItem>
                        )
                      })
                    }
                  </Menu>
                  }
                </>
              )
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
