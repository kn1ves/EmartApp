import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import PercentIcon from 'react-icons/lib/fa/percent';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 4,
  }),
  header: {
    borderRadius: 4,
    backgroundColor: "#4dc5da",
    marginTop: -35,
    padding: 25,
  },
  title: {
    color: "#fff",
  },
  dealicon: {
    color: "#fff",
    padding: 5,
  },
});

function CouponCodes(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Paper className={classes.header}>
          <Typography variant="headline" component="h3" className={classes.title}>
            <PercentIcon size='42' className={classes.dealicon} />
            Coupon Codes
          </Typography>
        </Paper>
        <List component="nav">
          <ListItem button>
            <ListItemText primary="Flat 50% off" seconday="FLAT50" />
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText primary="Buy one get one free" seconday="BUYGET" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="30% off on Men's Jackets" seconday="JACKET30" />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText primary="Summer clearance sale" seconday="SUMMERSALE" />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
}

CouponCodes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CouponCodes);