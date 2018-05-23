import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import logo from './img/logo.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    display: 'flex',
  },
  flex1: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    flex: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex2: {
    backgroundColor: '#c3c3c3',
    color: theme.palette.text.secondary,
    flex: 70,
  },
  navlinks: {
    padding: '5%',
    fontWeight: 250,
    textDecoration: 'none',
  },
});

function Logo(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <div className={classes.flex}>
            <div className={classes.flex1}>
              <img src={logo} alt="Logo 232x145" height="145" width="232" />
            </div>
            <div className={classes.flex2}>
              <div className={classes.navlinks}>
                <a href="#nogo" style={{color: 'rgb(69,133,141)'}}>
                  Home
                </a>
                <a href="#nogo" style={{color: 'rgb(69,133,141)'}}>
                  About Us
                </a>
                <a href="#nogo" style={{color: 'rgb(69,133,141)'}}>
                  Sell on Emart
                </a>
                <a href="#nogo" style={{color: 'rgb(69,133,141)'}}>
                  Customer Service
                </a>
                <a href="#nogo" style={{color: 'rgb(69,133,141)'}}>
                  Return Policy
                </a>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

Logo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Logo);