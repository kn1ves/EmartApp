import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CartIcon from 'react-icons/lib/fa/shopping-cart';
import DollarIcon from 'react-icons/lib/fa/money';
import imgurl from './img/canali-model.jpg';

//Make seperate component for the expansion panels
//Add small showcase images and make onclick event to change main image dynamically 

const styles = theme => ({
  root: {
  },
  button: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit+5,
    borderRadius: 18,
    backgroundColor: '#4dc5da',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  fullWidth: {
    width: '100%',
  },
  flex: {
    display: 'flex',
  },
  flexRight: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  imgdiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 25,
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
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class Product extends React.Component {
  state = {
    title: 'Canali Navy Blazer',
    price: '$1799',
    age: '1',
    name:'123',
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
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <div className={classes.imgdiv}>
              <img src={imgurl} height="350" width="270" alt="test" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div>
              <h2 className={classes.heading}>{this.state.title}</h2>
              <h3 className={classes.subheading}>{this.state.price}</h3>
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper>
              Small images
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.flex}>
              <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Age</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        </form>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.fullWidth}>
              <div className={classes.flexRight}>
                <Button variant="contained" style={{color:'#fff'}} className={classes.button}>
                  Checkout
                  <DollarIcon size="24" className={classes.rightIcon} />
                </Button>
                <Button variant="contained" style={{color:'#fff'}} className={classes.button}>
                  Add to Cart
                  <CartIcon size="24" className={classes.rightIcon} />
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Product.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Product);