import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

let white = '#fff'

export const styles = {
    videoBackground: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        filter: 'brightness(0.5)'
    },
    headingMain: {
        textAlign: 'center', 
        fontSize: '100px', 
        fontFamily: 'Orbitron', 
        fontWeight: '800', 
        color: white
    },
    headingGradient: {
        backgroundImage: 'linear-gradient(to right,#412384, #FF6585)', 
        backgroundClip: 'text', 
        color: 'transparent'
    },
    textCenter: {
        textAlign: 'center'
    },
    smallHeading: {
        fontSize: '20px',
        color: white
    },
    marginTop30: {
        marginTop: '30px'
    }
};

export const ButtonSecondary = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    borderRadius: '10px',
    fontSize: '20px',
    padding: '10px 15px 10px 15px'
}));