import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import ShowcaseShoe from "./components/showcase_shoe";
import ShowcaseShirt from "./components/showcase_shirt";
import ShowcaseAcc from "./components/showcase_accessories";
import ShowcaseSuit from "./components/showcase_suits";
import ShowcaseWatch from "./components/showcase_watches";
import ShowcaseJacket from "./components/showcase_jackets";
import TopDeals from "./components/topdeals";
import CouponCodes from "./components/couponcodes";
import ItemSuit from "./components/featuredproducts";
import Paper from '@material-ui/core/Paper';
import Banner from "./Banner";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '100%'
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
  },
  flex: {
  display: 'flex',
  },
  flex1: {
    marginTop: 7.5,
    marginBottom: 7.5,
  },
  flex2: {
    marginBottom: 7.5,
    marginTop: -32,
    padding: 8,
  },
  flex3: {
    marginTop: 7.5,
    marginBottom: 7.5,
  },
  flex4: {
    marginTop: 7.5,
    marginBottom: 7.5,
    paddingLeft: 12,
    paddingRight: 12,
  },
  featured: {
    marginBottom: 7.5,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 4,
  },
});

function Home(props) {
  const { classes } = props;

  return (
      <div className={classes.root}>
        <Grid>
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
              <Grid container item xs={12}>
                <Grid item xs={12} sm={6}>
                  <div className={classes.flex1}>
                    <TopDeals />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className={classes.flex2}>
                    <Banner />
                  </div>
                </Grid>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={12} sm={4}>
                  <div className={classes.flex3}>
                    <CouponCodes />
                  </div>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Grid container className={classes.featured} spacing={24}>
                    <Grid item xs={4}>
                      <ItemSuit />
                    </Grid>
                    <Grid item xs={4}>
                      <ItemSuit />
                    </Grid>
                    <Grid item xs={4}>
                      <Paper>
                        <ItemSuit />
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
