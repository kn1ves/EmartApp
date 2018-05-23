import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import ShoeSvg from './shoe';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    maxWidth: 345,
  }),
});

function ShowcaseShoe(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <ShoeSvg />
      </Paper>
    </div>
  );
}

ShowcaseShoe.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowcaseShoe);