import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

var normal = require('../svg/watches.svg');
var hover = require('../svg/watches-hover.svg');

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
});

class WatchSvg extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       imgSrc: normal,
       text: ""
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      imgSrc: hover,
      text: "Watches"
    });
  }

  handleMouseOut() {
    this.setState({
      imgSrc: normal,
      text: ""
    });
  }

  render() {

  const { classes } = this.props;

  return (
    <div>
      <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} className={classes.root}>
        <img src={this.state.imgSrc} className={classes.icon} width="128" height="128" alt="Shoe 128x128" />
      </div>
      <Typography contentEditable='true' ref="hovertext" variant="headline" component="h3">
        {this.state.text}
      </Typography>
    </div>
  );
}
}

WatchSvg.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WatchSvg);