import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Menu, MenuItem } from '@mui/material';
import { ReactComponent as DimensionIcon } from './../../Logo/DimensionIcon.svg'
import { useState } from 'react';
import { ButtonSecondary } from '../../theme/StyleMain';

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
  const [anchorEl, setAnchorEl] = useState({
    target: null,
    index: null
  });
  const open = Boolean(anchorEl.target);
  const handleClick = (event, index) => {
    setAnchorEl({
      target: event.currentTarget,
      index: index
    });
  };
  const handleClose = () => {
    setAnchorEl({
      target: null,
      index: null
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ width: 50 }}>
              <DimensionIcon style={{ fill: 'white' }} />
            </Box>
          </Box>
          {
            navigationItems.map(({ name, links }, index) => {
              return (
                <Box key={index} sx={{ mr: 5 }}>
                  <Button variant='text' onClick={(e) => handleClick(e, index)} sx={{ color: '#FFFFFF', fontSize: '20px', mr: 2 }}>
                    {name}
                  </Button>
                  {
                    links &&
                    <Menu
                      anchorEl={anchorEl.target}
                      open={open && anchorEl.index === index}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                    >
                      {
                        links.map((item, index) => {
                          return (
                            <MenuItem key={`menu ${index}`} onClick={handleClose}>
                              <Typography textAlign="center">{item}</Typography>
                            </MenuItem>
                          )
                        })
                      }
                    </Menu>
                  }
                </Box>
              )
            })
          }
          <ButtonSecondary color="secondary" variant='contained' sx={{ fontSize: '18px' }}>Get in Touch</ButtonSecondary>
        </Toolbar>
      </AppBar>
    </Box >
  )
}

export default NavigationBar
