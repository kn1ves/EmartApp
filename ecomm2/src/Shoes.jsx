import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import ShoeCard from "./components/item_shoe";
import Filter from './components/filter';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    display: 'flex'
  },
  flex1: {
    textAlign: "center",
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    backgroundColor: "#cdcdcd",
    flex: 30,
  },
  flex2: {
    textAlign: "center",
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    backgroundColor: "#cdcdcd",
    flex: 70
  },
  div_appbar: {
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  footer: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "rgb(64,83,175)"
  }
});

function Shoes(props) {
  const { classes } = props;

  return (
      <div className={classes.root}>
        <div className={classes.flex1}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Filter />
            </Grid>
          </Grid>
        </div>
        <div className={classes.flex2}>
          <Grid container spacing={24}>
            <Grid item xs>
              <ShoeCard />
            </Grid>
            <Grid item xs>
              <ShoeCard />
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs>
              <ShoeCard />
            </Grid>
            <Grid item xs>
              <ShoeCard />
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs>
              <ShoeCard />
            </Grid>
            <Grid item xs>
              <ShoeCard />
            </Grid>
            <Grid item xs>
              <ShoeCard />
            </Grid>
          </Grid>

        </div>
      </div>
  );
}

Shoes.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Shoes);
