import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import imgUrl from './carnatic_1.jpg';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Import WhatsApp icon

const Home = () => {

    const whatsappNumber = '96893277381'; // Replace 'whatsapp_number_here' with your actual WhatsApp number

    const handleContactClick = () => {
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    };

    return (
        <Container maxWidth="md">
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <img src={imgUrl} alt="Poster" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    Welcome to Swaralaya Music Academy
                </Typography>
                <Typography variant="body1" paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna sed lorem ultricies, eget sagittis dui ultrices.
                    In vitae nunc nunc. Vestibulum id velit at sapien fermentum posuere.
                </Typography>
                <Typography variant="body1" paragraph>
                    Nullam laoreet dolor velit, id hendrerit quam lobortis et. Vestibulum nec arcu eu nulla sagittis ullamcorper ac eu elit.
                </Typography>
                <Button
          variant="contained"
          style={{ backgroundColor: '#4CAF50', color: '#ffffff' }}
          onClick={handleContactClick}
          startIcon={<WhatsAppIcon />}
        >
          Contact Us
        </Button>
            </div>
        </Container>
    );
};

export default Home;
