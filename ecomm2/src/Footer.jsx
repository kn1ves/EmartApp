import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import SimpleBottomNavigation from "./components/footer";

const theme = createMuiTheme({
  palette: {
    primary: { main: "rgb(29,128,240)" }, //Ice
    secondary: { main: "rgb(29,128,240)" } //Crimson Sky
  }
});

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
    backgroundColor: "rgb(29,128,240)"
  }
});

function Footer(props) {
  const { classes } = props;

  return (
      <div className={classes.root}>
        <Grid>
          <Grid item xs={12}>
            <div className={classes.footer}>
              <MuiThemeProvider theme={theme}>
				       <SimpleBottomNavigation />
			       </MuiThemeProvider>
            </div>
          </Grid>
        </Grid>
      </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
