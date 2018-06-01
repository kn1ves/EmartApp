import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CartIcon from 'react-icons/lib/fa/shopping-cart';
import HomeIcon from 'react-icons/lib/fa/home';
import OrderIcon from 'react-icons/lib/fa/truck';
import WishListIcon from 'react-icons/lib/fa/list';
import DealIcon from 'react-icons/lib/fa/fire';
import PhoneIcon from 'react-icons/lib/fa/phone';
import SellIcon from 'react-icons/lib/md/monetization-on';

export const mailFolderListItems = (
  <div>
    <Link to='/' style={{textDecoration: 'none', color: 'rgb(255,255,255)'}}>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon size="24" />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
    <Link to='/checkout' style={{textDecoration: 'none', color: 'rgb(255,255,255)'}}>
    <ListItem button>
      <ListItemIcon>
        <CartIcon size="24" />
      </ListItemIcon>
      <ListItemText primary="My Cart" />
    </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <OrderIcon size="24" />
      </ListItemIcon>
      <ListItemText primary="My Orders" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <WishListIcon size="24" />
      </ListItemIcon>
      <ListItemText primary="My Wishlist" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DealIcon size="24" />
      </ListItemIcon>
      <ListItemText primary="Hot Deals" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PhoneIcon size="24" />
      </ListItemIcon>
      <ListItemText primary="Contact Us" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SellIcon size="24" />
      </ListItemIcon>
      <ListItemText primary="Sell on Emart" />
    </ListItem>
  </div>
);