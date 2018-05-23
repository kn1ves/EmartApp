import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import ButtonAppBar from "./components/appbar";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  div_main: {
    textAlign: "center",
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    backgroundColor: "#cdcdcd",
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

function Header(props) {
  const { classes } = props;

  return (
      <div className={classes.root}>
        <Grid>
          <Grid item xs={12}>
            <div className={classes.div_appbar}>
            	<ButtonAppBar />
            </div>
          </Grid>
        </Grid>
      </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
