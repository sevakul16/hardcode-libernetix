import React from 'react'
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { FooterLinkHeading, FooterLink } from './FooterStyle';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Container>
            <Box>
                <Grid container direction='row'>
                    <Grid item xs={12} md={5}>
                        <Grid container direction='row' sx={{ height: '56px' }}>
                            <Typography sx={{ fontFamily: 'Orbitron' }} variant="h3">Libernetix</Typography>
                        </Grid>
                        <Grid container direction='row' sx={{ mt: 2 }}>
                            <Grid item xs={12} md={7}>
                                <Typography>
                                    Company information.
                                    Our company is the best and
                                    lorem ipsum dolor sit,
                                    amet consectetur adipisicing elit.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={7} sx={isMobile ? ({ mt: 4 }) : (null)}>
                        <Box component="form">
                            <Grid container direction='row'>
                                <Grid item xs={9} sm={10}>
                                    <TextField id="outlined-basic" label="Enter your email address" variant="outlined" type="email" sx={{ width: '100%', '& fieldset': { borderRadius: '4px 0px 0px 4px' }, '& .Mui-focused .MuiOutlinedInput-notchedOutline':{borderWidth:'1px'}}} />
                                </Grid>
                                <Grid item xs={3} sm={2}>
                                    <Button variant="contained" sx={{ width: '100%', height: '100%', borderLeft: 0, borderRadius: '0px 4px 4px 0px', boxShadow: 'none', '&:hover': { boxShadow: 'none' } }}>Subscribe</Button>
                                </Grid>
                            </Grid>
                            <Grid container direction='row'>
                                <Grid item xs={12} sx={{ mt: 2 }}>
                                    <Typography>
                                        Subscribe to the Libernetix mailing list to receive latest information on our updates
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction='row' sx={{ mt: 4 }}>
                                <Grid item xs={6} md={4}>
                                    <Grid container direction='row'>
                                        <FooterLinkHeading>Solutions</FooterLinkHeading>
                                    </Grid>
                                    <Grid container direction='row' sx={{ mt: 1 }}>
                                        <FooterLink href="#">Payment Gateway</FooterLink>
                                    </Grid>
                                    <Grid container direction='row' sx={{ mt: 1 }}>
                                        <FooterLink href="#">Merchant Dashbord</FooterLink>
                                    </Grid>
                                    <Grid container direction='row' sx={{ mt: 1 }}>
                                        <FooterLink href="#">Card Acquiring</FooterLink>
                                    </Grid>
                                    <Grid container direction='row' sx={{ mt: 1 }}>
                                        <FooterLink href="#">Analytics &amp; Reporting</FooterLink>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <Grid container direction='row'>
                                        <FooterLinkHeading>Help center</FooterLinkHeading>
                                    </Grid>
                                    <Grid container direction='row' sx={{ mt: 1 }}>
                                        <FooterLink href="#">About</FooterLink>
                                    </Grid>
                                    <Grid container direction='row' sx={{ mt: 1 }}>
                                        <FooterLink href="#">Roadmap</FooterLink>
                                    </Grid>
                                    <Grid container direction='row' sx={{ mt: 1 }}>
                                        <FooterLink href="#">FAQ</FooterLink>
                                    </Grid>
                                    <Grid container direction='row' sx={{ mt: 1 }}>
                                        <FooterLink href="#">Contact Us</FooterLink>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} md={4} sx={isMobile ? ({ mt: 4 }) : (null)}>
                                    <Grid container direction='row'>
                                        <FooterLinkHeading>Legal</FooterLinkHeading>
                                    </Grid>
                                    <Grid container direction='row' sx={{ mt: 1 }}>
                                        <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                                    </Grid>
                                    <Grid container direction='row' sx={{ mt: 1 }}>
                                        <FooterLink href="#">Pricacy Policy</FooterLink>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container direction='row' sx={{ mt: 4 }}>
                    <Grid item xs={6}>
                        <Typography sx={{ color: '#636a7e' }}>
                            &copy; {new Date().getFullYear()} Libernetix Inc.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container direction='row' sx={{ justifyContent: 'flex-end' }}>
                            <Link href='#' sx={{ mr: 2 }}>
                                <LinkedInIcon></LinkedInIcon>
                            </Link>
                            <Link href='#'>
                                <TwitterIcon></TwitterIcon>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Footer
