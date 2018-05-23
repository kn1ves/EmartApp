import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import SuitSvg from './suits';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    maxWidth: 345,
  }),
});

function ShowcaseSuit(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <SuitSvg />
      </Paper>
    </div>
  );
}

ShowcaseSuit.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowcaseSuit);