import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (purchase) => (
  <IconMenu iconButtonElement={iconButtonElement}>
    {/*{console.log(purchase, ' wtf gid')}*/}
    <MenuItem> <span id={purchase._id}> <Link to={"/makeReview/" + purchase._id}> Make Review </Link> </span></MenuItem>
    {/*<MenuItem containerElement={<Link to={"/makeReview/" + purchase._id}> Make Review </Link> }> </MenuItem>*/}
  </IconMenu>
);

const purchaseItem = (purchase) => (
  <ListItem
      leftAvatar={<Avatar src={purchase.shoes.image} />}
      primaryText={purchase.shoes.name}
      rightIconButton={rightIconMenu(purchase)}
      secondaryText={
        <p>
          <span style={{color: darkBlack}}>{'Php. ' + purchase.shoes.price}</span> <br/>
          <span>{purchase.getFormattedDate()} </span>
        </p>
      }
      secondaryTextLines={2}
    />
);

const closeBtn = (touchTap) => (
        <FlatButton
        label={<Link to="/store"> Close </Link>}
        primary={true}
        onTouchTap={touchTap}
        />
);

const purchaseList = ({state, purchases, close}) => (
    <div>
        <Dialog
          autoScrollBodyContent={true}
          title="Purchases"
          modal={false}
          open={state}
          actions={closeBtn(close)}
        >
        <div>
    
      <List>
        <Subheader>Pending</Subheader>
        {purchases.map(purchase => purchaseItem(purchase))}
      </List>
    
    </div>
        </Dialog>
    </div>
);


export default purchaseList;