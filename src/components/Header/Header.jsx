import React from 'react';
import {
  AppBar, Toolbar, Typography, Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../../assets/svg/logo.svg';
import help from '../../assets/svg/help.svg';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  toolbar: {
    justifyContent: 'space-between',
    minHeight: 48
  },
  helpBtn: {
    color: 'white'
  },
  placeholder: {
    height: 48
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <img src={logo} className={classes.logo} alt="logo" />
          <Typography className={classes.title} variant="h6">
            Welcome to iFOLIO!
          </Typography>
          <Button
            edge="end"
            className={classes.helpBtn}
            endIcon={<img src={help} alt="logo" />}
          >
            Help
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
};

export default Header;
