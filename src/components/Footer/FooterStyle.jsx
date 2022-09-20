import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

export const FooterLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: '#000',
    '&:hover': {
        color: '#636a7e'
    }
}));

export const FooterLinkHeading = styled(Typography)(({ theme }) => ({
    fontWeight:'600'
}));
