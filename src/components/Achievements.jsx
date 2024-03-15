import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import imgUrl from './veenaLogo.png';

const Achievements = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Achievements
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          {/* Embedding video using iframe */}
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/pWg_uOMHdqc?si=CRB27O2MfLuJEPys"  // Replace with your video URL
            title="Achievements Video"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={imgUrl}
                  alt="Achievement 1"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Text regarding Achievement 1
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={imgUrl}
                  alt="Achievement 2"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Text regarding Achievement 2
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Achievements;
