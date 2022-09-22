import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import { useTheme } from '@mui/material/styles';

let white = '#fff'
let grey = 'rgb(236,236,240)'
let radius = '10px'

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
    },
    sectionLabel: {
        color: white,
        backgroundColor:'secondary.main',
        py:1,
        px:3,
        borderRadius: radius,
        fontWeight:500
    },
    sectionHeading: {
        fontSize: '50px',
        fontFamily: 'Orbitron',
        textAlign: 'center',
        fontWeight: '500'
    },
    sectionContainer: {
        my: 4,
        py: 4
    },
    solutionBlock: {
        backgroundColor: grey,
        px:4,
        py:5,
        borderRadius: radius,
        mt:2
    },
    solutionBlockBig: {
        width: '100%',
        borderRadius: radius,
        backgroundColor: grey,
    },
    solutionBlockHeading: {
        fontSize: '30px',
        fontWeight: '500',
        mb:1
    },
    fullHeight:{
        height: '100%'
    },
    itemBottom:{
        display:'flex',
        alignContent: 'flex-end'
    },
    solutionIconBox: {
        width:'120px',
        height: '120px',
        borderRadius: '50%',
        backgroundColor: white,
        boxShadow: '0px 0px 10px 0px rgba(107,107,107,0.15)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '60%'
    },
    cardsBackground: {
        position: 'relative'
    }
    
};

export const ButtonSecondary = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    borderRadius: radius,
    fontSize: '15px',
    padding: '10px 25px 10px 25px'
}));

export const LabelHeading = styled(Button)(({theme})=>({
    borderRadius: radius,
}));
