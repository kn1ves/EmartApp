import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import SearchBarReact from './searchbar';
import AppDrawer from './drawer';
import LoginPopup from './login';

const styles = {      
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const theme = createMuiTheme({
  palette: {
    //primary: { main: 'rgb(29,128,240)' }, 
    primary: {main: '#4dc5da'},
    secondary: { main: '#11cb5f' }, 
  },
});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <AppDrawer />
            <div className={classes.flex}>
              <SearchBarReact />
            </div>
            <LoginPopup />
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
