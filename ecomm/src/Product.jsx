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
import SlideShow from 'react-image-show';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CartIcon from 'react-icons/lib/fa/shopping-cart';
import DollarIcon from 'react-icons/lib/fa/money';
import imgurl from './img/canali-model.jpg';
import PanelProduct from './components/panelproduct';

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
    marginTop: 25,
    minWidth: 290,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  rootz: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

class Product extends React.Component {
  state = {
    title: 'Canali Navy Blazer',
    price: '$1799',
    age: '1',
    name:'123',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    const urlArray = ['https://www.canali.com/media/catalog/product/cache/38/image/9df78eab33525d08d6e5fb8d27136e95/T/1/T13290-CX00517-301_i_ZOOM.jpg', 'https://www.canali.com/media/catalog/product/cache/38/image/9df78eab33525d08d6e5fb8d27136e95/T/1/T13290-CX00517-301_b_SCHEDA.jpg', 'https://www.canali.com/media/catalog/product/cache/38/image/9df78eab33525d08d6e5fb8d27136e95/T/1/T13290-CX00517-301_c_SCHEDA.jpg', 'https://www.canali.com/media/catalog/product/cache/38/image/9df78eab33525d08d6e5fb8d27136e95/T/1/T13290-CX00517-301_a_ZOOM.jpg']

    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <div className={classes.imgdiv}>
              <SlideShow
              images={urlArray}
              width="300px"
              imagesWidth="270px"
              imagesHeight="350px"
              imagesHeightMobile="56vw"
              thumbnailsWidth="600px"
              thumbnailsHeight="850px"
              thumbnails fixedImagesHeight
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h2 className={classes.heading}>{this.state.title}</h2>
            <h3 className={classes.subheading}>{this.state.price}</h3>
            <PanelProduct />
            <div className={classes.flex}>
              <form className={classes.rootz} autoComplete="off">
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-simple">Size</InputLabel>
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
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-simple">Color</InputLabel>
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