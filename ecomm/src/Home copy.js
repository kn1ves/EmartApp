import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import ButtonAppBar from "./components/appbar";
import SimpleBottomNavigation from "./components/footer";
import ShoeCard from "./components/item_shoe";
import ShowcaseShoe from "./components/showcase_shoe";
import ShowcaseShirt from "./components/showcase_shirt";
import ShowcaseAcc from "./components/showcase_accessories";
import ShowcaseSuit from "./components/showcase_suits";
import ShowcaseWatch from "./components/showcase_watches";
import ShowcaseJacket from "./components/showcase_jackets";

const theme = createMuiTheme({
  palette: {
    primary: { main: "rgb(212,77,61)" }, //Ice
    secondary: { main: "rgb(212,77,61)" } //Crimson Sky
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
    backgroundColor: "rgb(64,83,175)"
  }
});

function Home(props) {
  const { classes } = props;

  return (
      <div className={classes.root}>
        <Grid>
          <Grid item xs={12}>
            <div className={classes.div_appbar}>
            	<ButtonAppBar />
            </div>
          </Grid>
          <div className={classes.div_main}>
          <Grid container spacing={24}>
	          <Grid item xs>
		           	<ShowcaseShoe />
	          </Grid>
	          <Grid item xs>
		           	<ShowcaseShirt />
	          </Grid>
	          <Grid item xs>
		           	<ShowcaseAcc />
	          </Grid>
          </Grid>
          <Grid container spacing={24}>
	          <Grid item xs>
		           	<ShowcaseSuit />
	          </Grid>
	          <Grid item xs>
		           	<ShowcaseWatch />
	          </Grid>
            <Grid item xs>
                <ShowcaseJacket />
            </Grid>
          </Grid>
          </div>
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

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
