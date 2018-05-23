import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Banners from './components/banners'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  banner: {
    color: theme.palette.text.secondary,
    width: "150%"
  },
});

function Banner(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid>
        <Grid item xs={12}>
          <div className={classes.banner}>
            <Banners />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Banner);