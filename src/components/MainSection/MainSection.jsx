import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import videoBg from './welcome.mp4'
import { styles } from '../../theme/StyleMain';
import { ButtonSecondary } from '../../theme/StyleMain';

const MainSection = () => {
    return (
        <>
            <video style={styles.videoBackground} autoPlay muted loop>
                <source src={videoBg} type="video/mp4" />
            </video>
            <Box sx={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center' }}>
                <Grid container direction='column' sx={{ zIndex: 1 }}>
                    <Typography sx={styles.headingMain}>
                        Get your
                    </Typography>
                    <Typography sx={[styles.headingMain, styles.headingGradient]}>
                        payments done
                    </Typography>
                    <Typography sx={[styles.smallHeading, styles.textCenter, styles.marginTop30]}>
                        Accept payments anytime, anywhere. Dream big.
                    </Typography>
                    <Grid sx={{ justifyContent: 'center', display: 'flex', mt: 4 }}>
                        <ButtonSecondary color="secondary" variant='contained'>Get in Touch</ButtonSecondary>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default MainSection
