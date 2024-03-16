import React from 'react';
import { Container, Grid, Typography, Link, IconButton, useMediaQuery } from '@mui/material';
import { Facebook, Twitter, Instagram, WhatsApp } from '@mui/icons-material';

const Footer = () => {
  const isMdScreen = useMediaQuery('(max-width:960px)');

  return (
    <footer style={{ backgroundColor: '#f5f5f5', padding: '20px', marginTop: '20px' }}>
      <Container>
        <Grid container spacing={2} justifyContent="space-between" alignItems={isMdScreen ? 'center' : 'flex-start'}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="div" align={isMdScreen ? 'center' : 'inherit'}>
              Swaralaya Music Academy
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2} justifyContent={isMdScreen ? 'center' : 'flex-end'} alignItems="center">
              <Grid item>
                <Link href="https://www.facebook.com/Swaralaya-Music-Academy" target="_blank" rel="noopener noreferrer">
                  <IconButton color="primary" aria-label="Facebook">
                    <Facebook />
                  </IconButton>
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://twitter.com/SwaralayaMusic" target="_blank" rel="noopener noreferrer">
                  <IconButton color="primary" aria-label="Twitter">
                    <Twitter />
                  </IconButton>
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://www.instagram.com/swaralayamusicacademy/" target="_blank" rel="noopener noreferrer">
                  <IconButton color="primary" aria-label="Instagram">
                    <Instagram />
                  </IconButton>
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://wa.me/96893277381" target="_blank" rel="noopener noreferrer">
                  <IconButton color="primary" aria-label="WhatsApp">
                    <WhatsApp />
                  </IconButton>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
