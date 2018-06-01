import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DealIcon from 'react-icons/lib/io/fireball';

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

function TopDeals(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Paper className={classes.header}>
          <Typography variant="headline" component="h3" className={classes.title}>
            <DealIcon size='48' className={classes.dealicon} />
            Top Deals
          </Typography>
        </Paper>
        <List component="nav">
          <ListItem button>
            <ListItemText primary="Deal 1" />
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText primary="Deal 2" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Deal 3" />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText primary="Deal 4" />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
}

TopDeals.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopDeals);