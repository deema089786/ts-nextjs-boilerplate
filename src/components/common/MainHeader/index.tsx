import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import Navigation from './Navigation';
import useStyles from './styles';

const MainHeader: React.FC = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => setOpenDrawer(true)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            AGROTEX
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Navigation open={openDrawer} onClose={() => setOpenDrawer(false)} />
    </div>
  );
};
export default MainHeader;
