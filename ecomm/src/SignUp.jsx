import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  container: {
    display: 'flex',
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
    padding: 10,
  },
  menu: {
    width: 200,
  },
  root: {
    width: '100%',
  },
  flex1: {
    flex:70,
  }
});


class SignUp extends React.Component {
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
      <div className={classes.container}>
      <div>
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
          </form>
          </div>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);