import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Footer = () => {
    return (
        <Container>
            <Box>
                <Grid container direction='row' spacing={0}>
                    <Grid item xs={5}>
                        <Paper>
                            xs=8
                        </Paper>
                    </Grid>
                    <Grid item xs={7}>
                        <Box component="form">
                            <Grid container direction='row'>
                                <Grid item xs={10}>
                                    <TextField id="outlined-basic" label="Enter your email address" variant="outlined" type="email" sx={{ width: '100%'}} />
                                </Grid>
                                <Grid item xs={2}>
                                    <Button variant="contained" sx={{ width: '100%', height: '100%' }}>Subscribe</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Footer
