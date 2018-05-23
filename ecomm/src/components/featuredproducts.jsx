import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  card: {
    maxWidth: 400,
    paddingLeft: 12,
    paddingRight: 12,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    paddingLeft: '10%',
    paddingRight: '10%',
    backgroundSize: 84,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class ItemSuit extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader

            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="Canali Blazer"
            subheader="$1799"
          />
          <CardMedia
            className={classes.media}
            image="http://gsdk.creative-tim.com/assets/img/examples/ecommerce8.jpg"
            title="Canali"
          />
          <CardContent>
            <Typography component="p">
              Blue water-resistant wool travel blazer
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Details:
              </Typography>
              <Typography paragraph align={'justify'}>
                More about the product
              </Typography>
              <Typography paragraph align={'left'}>
                Size: L
              </Typography>
              <Typography paragraph align={'left'}>
                Material: Wool
              </Typography>
              <Typography paragraph align={'left'}>
                Colour: Navy
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

ItemSuit.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemSuit)