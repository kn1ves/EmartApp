import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';


const styles = theme => ({
  container: {
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
    padding: 10,
  },
  root: {
    width: '100%',
  },
  flex1: {
  },
  creditcard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 75,
  },
});


class TextFields extends React.Component {
  state = {
    name: '',
    cardnumber: '',
    multiline: 'Controlled',
    currency: 'EUR',
    focused: '',
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
        <Grid container>
          <Grid item xs={12} sm={6}>
            <form noValidate autoComplete="off">
              <TextField
                id="cardnumber"
                label="Card Number"
                className={classes.textField}
                value={this.state.cardnumber}
                onChange={this.handleChange('cardnumber')}
                onFocus={this.handleInputFocus}
                margin="normal"
              />
              <TextField
                id="name"
                label="Full Name"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('name')}
                onFocus={this.handleInputFocus}
                margin="normal"
              />
              <TextField
                id="expiry"
                label="Expiry"
                className={classes.textField}
                value={this.state.expiry}
                onChange={this.handleChange('expiry')}
                onFocus={this.handleInputFocus}
                margin="normal"
              />
              <TextField
                id="cvc"
                name="cvc"
                label="CVC"
                className={classes.textField}
                value={this.state.cvv}
                type="password"
                onChange={this.handleChange('cvc')}
                onFocus={this.handleInputFocus}
                margin="normal"
              />
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.creditcard}>
              <Cards
              number={this.state.cardnumber}
              name={this.state.name}
              expiry={this.state.expiry}
              cvc={this.state.cvc}
              focused={this.state.focused}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);