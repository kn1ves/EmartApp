import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import logo from './img/logo.png';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  divcenter: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: 145,
  },
  navlinks: {
    width: '100%',
    fontWeight: 250,
    textDecoration: 'none',
    height: 145,
    paddingTop: '12%',
    display: 'flex',
    flexDirection: 'row-reverse',
  },
});

function Logo(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <div className={classes.divcenter}>
            <img src={logo} alt="Logo 232x145" height="145" width="232" />
          </div>
        </Grid>
        <Grid item xs={12} sm={8}>
          <div className={classes.navlinks}>
            <Button>
              About Us
            </Button>
            <Button>
              Customer Service
            </Button>
            <Button>
              Return Policy
            </Button>
            <Button>
              Sell on Emart
            </Button>
            <Button>
              Home
            </Button>
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