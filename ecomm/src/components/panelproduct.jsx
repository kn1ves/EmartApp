import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  heading: {
    fontWeight: 400,
    fontSize: 32,
    fontFamily: 'Helvetica',
    color: '#000',
    paddingLeft: 15,
    paddingRight: 15,
  },
  subheading: {
    fontFamily: 'Helvetica',
    fontWeight: 250,
    fontSize: 14,
    color: '#8e8e8e',
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 45,
  },
  bodytext: {
    fontFamily: 'Helvetica',
    fontWeight: 325,
    fontSize: 14,
    color: '#4dc5da',
  },
});

class PanelProduct extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
			<div>
              <ExpansionPanel style={{elevation:0, boxShadow:'none'}} expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary style={{marginLeft: 0, paddingLeft: 0}} expandIcon={<ExpandMoreIcon />}>
            <h3 className={classes.bodytext}>
              Description
            </h3>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{elevation:0, boxShadow:'none'}} expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary style={{marginLeft: 0, paddingLeft: 0}} expandIcon={<ExpandMoreIcon />}>
            <h3 className={classes.bodytext}>
              Designer Information
            </h3>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
              diam eros in elit. Pellentesque convallis laoreet laoreet.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{elevation:0, boxShadow:'none'}} expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary style={{marginLeft: 0, paddingLeft: 0}} expandIcon={<ExpandMoreIcon />}>
            <h3 className={classes.bodytext}>
              Size and Care
            </h3>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
              eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <Divider />
        </div>
    );
  }
}

PanelProduct.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PanelProduct);