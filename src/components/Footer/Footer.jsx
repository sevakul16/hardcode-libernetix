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
import { footerLinks } from './FooterLinks';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Container sx={{ borderTop: 1, pt:8, borderColor: 'rgb(217,217,217)'}}>
            <Box>
                <Grid container direction='row'>
                    <Grid item xs={12} md={4}>
                        <Grid container direction='row' sx={{ height: '56px' }}>
                            <Typography sx={{ fontFamily: 'Orbitron' }} variant="h3">Libernetix</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} sx={isMobile ? ({ mt: 4 }) : (null)}>
                        <Box component="form">
                            <Grid container direction='row'>
                                <Grid item xs={9} sm={10}>
                                    <TextField id="outlined-basic" label="Enter your email address" variant="outlined" type="email" sx={{ width: '100%', '& fieldset': { borderRadius: '10px 0px 0px 10px' }, '& .Mui-focused .MuiOutlinedInput-notchedOutline': { borderWidth: '1px' } }} />
                                </Grid>
                                <Grid item xs={3} sm={2}>
                                    <Button variant="contained" sx={{ width: '100%', height: '100%', borderLeft: 0, borderRadius: '0px 10px 10px 0px', boxShadow: 'none', '&:hover': { boxShadow: 'none' } }} color="secondary">Subscribe</Button>
                                </Grid>
                            </Grid>
                            <Grid container direction='row'>
                                <Grid item xs={12} sx={{ mt: 2 }}>
                                    <Typography sx={{ fontSize: '14px' }}>
                                        Subscribe to the Libernetix mailing list to receive latest information on our updates
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container direction='row'>
                    <Grid container direction='row' sx={{ mt: 4 }}>
                        <Grid item xs={6} md={4} sx={{ mt: 4 }}>
                            <Grid container direction='row'>
                                <FooterLinkHeading>
                                    Registered Address:
                                </FooterLinkHeading>
                            </Grid>
                            <Grid container direction='row' sx={{ mt: 2 }}>
                                <Typography>
                                    INFOTECH GROUP LTD <br />
                                    The Panorama, Park street, <br />
                                    Ashford, Kent, England,  <br />
                                    TN24 8EZ
                                </Typography>
                            </Grid>
                            <Grid container direction='row' sx={{ mt: 2 }}>
                                <Link href='#' sx={{ mr: 2 }}>
                                    <LinkedInIcon />
                                </Link>
                                <Link href='#'>
                                    <TwitterIcon />
                                </Link>
                            </Grid>
                        </Grid>
                        {
                            footerLinks.map((section) => {
                                return (
                                    <Grid key={section.name} item xs={6} md sx={{ mt: 4 }} >
                                        <Grid container direction='row'>
                                            <FooterLinkHeading>{section.name}</FooterLinkHeading>
                                        </Grid>
                                        {
                                            section.links.map((link) => {
                                                return (
                                                    <Grid key={link.linkName} container direction='row' sx={{ mt: 2 }}>
                                                        <FooterLink href={link.linkTo}>{link.linkName}</FooterLink>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
                <Grid container direction='row' sx={{ my: 4 }}>
                    <Typography sx={{ color: '#636a7e' }}>
                        &copy; {new Date().getFullYear()} Libernetix Inc.
                    </Typography>
                </Grid>
            </Box>
        </Container>
    )
}

export default Footer
