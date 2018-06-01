import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
    padding: 10,
  },
  paper: {
    width: '50%',
    paddingTop: 25,
    padding: 10,
    marginTop: 35,
    marginBottom: 35,
  },
  title: {
    backgroundColor: '#4dc5da',
    fontWeight: 800,
    color: '#fff',
    height: 80,
    width: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignText: 'center',
    borderRadius: 12,
    marginTop: -45,
  },
  whitetext: {
    color: '#fff',
  },
  flex: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    width: '100%',
    backgroundColor: '#cdcdcd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignText: 'center',
  },
});


class Signup extends React.Component {
  state = {
    email: '',
    password: '',
    repeatpass: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.id,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div className={classes.flex}>
            <div className={classes.title}>
              Sign Up
            </div>
          </div>
          <form noValidate autoComplete="off">
            <TextField
              id="email"
              label="Email Address"
              className={classes.textField}
              value={this.state.email}
              onChange={this.handleChange('email')}
              margin="normal"
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              className={classes.textField}
              value={this.state.password}
              type="password"
              onChange={this.handleChange('password')}
              margin="normal"
            />
            <TextField
              id="repeatpass"
              name="repeatpass"
              label="Confirm Password"
              className={classes.textField}
              value={this.state.repeatpass}
              type="password"
              onChange={this.handleChange('repeatpass')}
              margin="normal"
            />
            <div className={classes.flex}>
              <Button variant="raised" style={{backgroundColor: '#4dc5da'}}>
                <span className={classes.whitetext}>
                  Go
                </span>
              </Button>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signup);