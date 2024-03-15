import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Grid, Box, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import logoUrl from './veenaLogo.png';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const isMdScreen = useMediaQuery('(max-width:960px)');

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={6} md={3}>
            <Box display="flex" alignItems="center">
              {isMdScreen && (
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleClick}
                >
                  <MenuIcon />
                </IconButton>
              )}
              <img src={logoUrl} alt="Swaralaya Music Academy" width="150" height="auto" />
              <Typography variant="h6" component="div" sx={{ ml: 1 }}>
                Swaralaya Music Academy
              </Typography>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                getContentAnchorEl={null}
              >
                {isMdScreen && (
                  <>
                    <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/achievements">Achievements</MenuItem>
                  </>
                )}
              </Menu>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} sx={{ textAlign: 'right' }}>
            {!isMdScreen && (
              <>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/achievements">Achievements</Button>
              </>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
