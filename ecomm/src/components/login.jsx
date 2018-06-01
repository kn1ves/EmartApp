import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';

const styles = {
  title: {
    backgroundColor: '#4dc5da',
    color: '#fff',
    textAlign: 'center',
    minWidth: '100%',
},
  whitetext: {
    color:'#fff',
    fontWeight: 800,
  },
  paddingText: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  flex: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
  };

class LoginPopup extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  render() {

    const { classes } = this.props;

    return (
      <div>
        <IconButton
          aria-haspopup="true"
          onClick={this.handleClickOpen}
          color="inherit"
        >
          <AccountCircle style={{color: '#fff'}} />
        </IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
        <div className={classes.flex}>
          <DialogTitle id="form-dialog-title" className={classes.title}>
            <span className={classes.whitetext}>
              LOGIN
            </span>
          </DialogTitle>
        </div>
          <DialogContent>
            <DialogContentText>
              <div className={classes.paddingText}>
                Please login using your registered email address.
              </div>
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
            />
            <TextField
              margin="dense"
              id="pass"
              label="Password"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

LoginPopup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginPopup);
