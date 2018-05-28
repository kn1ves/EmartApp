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
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    paddingLeft: '10%',
    paddingRight: '10%',
    backgroundSize: 150,
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

class ShoeCard extends React.Component {
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
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="Hana - Canvas Shoe"
            subheader="$79.99"
          />
          <CardMedia
            className={classes.media}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvzmJXeqgSJvC43w_LhQOFUZVN6mOxucCxqSb9HSO1Zsmcsn-e"
            title="Hana Casual Canvas"
          />
          <CardContent>
            <Typography component="p">
              Lightweight casual comfort that’s ready for your next adventure.
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
                For years, people have told us, &quot;We LOVE our sandals, but what do we do when it’s cold out, or when I need something with closed-toes for work, or if I need a bit more protection?&quot;
                The new Ipari Hana is the answer.

                The Hana is, first and foremost, a casual shoe.  But since it’s built on our high-performance FeelTrue® sandal base, it’ll handle much more.

                We don’t recommend using the Hana as a running shoe, but we know some of you will wear the Hana for more than just chillin’ at a coffee shop.
              </Typography>
              <Typography paragraph align={'left'}>
                Size: 8(US)
              </Typography>
              <Typography paragraph align={'left'}>
                Material: Canvas
              </Typography>
              <Typography paragraph align={'left'}>
                Colour: Black
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

ShoeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShoeCard)