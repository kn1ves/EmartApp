import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import img from '../svg/suits-hover.svg';

const styles = theme => ({
	root: {
		maxWidth: 300,
		margin: 25,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
	},
	img: {
		margin: 20,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
	},
	divcenter: {
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
	},
	flex: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
	},
	heading: {
		fontWeight: 400,
		fontSize: 32,
		fontFamily: 'Helvetica',
		color: '#000',
		paddingLeft: 15,
		paddingRight: 15,
	},
	bodytext: {
		fontFamily: 'Helvetica',
		fontWeight: 250,
		fontSize: 14,
		color: '#8e8e8e',
		paddingLeft: 15,
		paddingRight: 15,
	},
});

class Showcase extends React.Component {

  render() {
    const { classes } = this.props;
    const imgx = require(`../img/${this.props.imgurl}`);

    return (
    	<div className={classes.root}>
			<Paper>
	        	<div className={classes.flex}>
		        	<div className={classes.divcenter}>
		        		<div className={classes.img}>
			        		<img src={imgx} height="158" width="128" alt="showcase" />
		        		</div>
		        	</div>
		        </div>
        		<div className={classes.divcenter}>
        			<h3 className={classes.heading}>{this.props.title}</h3>
        		</div>
        		<div className={classes.divcenter}>
        			<p className={classes.bodytext}>Price: {this.props.price}</p>
        		</div>
	      </Paper>
      </div>
    );
  }
}

Showcase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Showcase);
