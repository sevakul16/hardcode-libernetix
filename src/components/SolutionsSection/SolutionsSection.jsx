import React from 'react'
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { SectionContainer } from '../../theme/StyleMain';
import { styles } from '../../theme/StyleMain';
import { ButtonSecondary } from '../../theme/StyleMain';
import cardsImage from './images/credit-cards-02.svg'
import gatewayIcon from './images/gateawey-icon-01.svg'
import securityIcon from './images/anti-froud-icon-01.svg'


const SolutionsSection = () => {
    const theme = useTheme();
    return (
        <Container sx={styles.sectionContainer}>
            <Box>
                <Grid container direction='row' sx={{ justifyContent: 'center' }}>
                    <Box sx={styles.sectionLabel}>Solutions</Box>
                </Grid>
                <Grid container direction='row' sx={{ justifyContent: 'center', mt: 4 }}>
                    <Typography sx={styles.sectionHeading}>
                        Refresh your business with <br />
                        a one-step solution from <Box component="span" sx={styles.headingGradient}>Libernetix</Box>
                    </Typography>
                </Grid>
                <Box sx={{ paddingTop: '150px' }}>
                    <Grid container sx={styles.solutionBlockBig}>
                        <Grid item xs sx={{ px: 4, py: 5 }}>
                            <Typography sx={styles.solutionBlockHeading}>
                                Card acquiring
                            </Typography>
                            <Typography>
                                Your all-in-one tool, instant reporting <br />
                                of all payment operations
                            </Typography>
                            <ButtonSecondary color="secondary" variant='contained' sx={{ mt: 4 }}>Learn more</ButtonSecondary>
                        </Grid>
                        <Grid item xs sx={styles.cardsBackground}>
                            <Box
                                component="img"
                                sx={{
                                    position: 'absolute',
                                    bottom: 0
                                }}
                                alt="credit cards"
                                src={cardsImage}
                            />
                        </Grid>
                    </Grid>
                    <Grid container direction='row' spacing={2}>
                        <Grid item xs={6}>
                            <Grid container direction='column'>
                                <Grid item>
                                    <Grid container sx={styles.solutionBlock}>
                                        <Grid item>
                                            <Typography sx={styles.solutionBlockHeading}>
                                                Payment gateway
                                            </Typography>
                                            <Typography>
                                                Your all-in-one tool, instant reporting <br />
                                                of all payment operations
                                            </Typography>
                                            <ButtonSecondary color="secondary" variant='contained' sx={{ mt: 4 }}>Learn more</ButtonSecondary>
                                        </Grid>
                                        <Grid item xs sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
                                            <Box sx={styles.solutionIconBox} style={{backgroundImage: `url("${gatewayIcon}")`}}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container sx={styles.solutionBlock}>
                                        <Grid item>
                                            <Typography sx={styles.solutionBlockHeading}>
                                                Anti-froud system
                                            </Typography>
                                            <Typography>
                                                Your all-in-one tool, instant reporting <br />
                                                of all payment operations
                                            </Typography>
                                            <ButtonSecondary color="secondary" variant='contained' sx={{ mt: 4 }}>Learn more</ButtonSecondary>
                                        </Grid>
                                        <Grid item xs sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
                                            <Box sx={styles.solutionIconBox}>
                                            <Box sx={styles.solutionIconBox} style={{backgroundImage: `url("${securityIcon}")`}}/>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container direction='column' sx={styles.fullHeight}>
                                <Grid item sx={[styles.solutionBlock, styles.fullHeight, styles.itemBottom]}>
                                    <Grid container>
                                        <Grid item>
                                            <Typography sx={[styles.solutionBlockHeading]}>
                                                Analytics and Repotring
                                            </Typography>
                                            <Typography>
                                                Your all-in-one tool, instant reporting <br />
                                                of all payment operations
                                            </Typography>
                                            <ButtonSecondary color="secondary" variant='contained' sx={{ mt: 4 }}>Learn more</ButtonSecondary>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default SolutionsSection
