import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
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

const rightIconMenu = (reservation, handleDelete, handlePurchase) => (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem onTouchTap={handlePurchase}> <span id={reservation._id}> Purchase </span></MenuItem>
    <MenuItem onTouchTap={handleDelete}><span id={reservation._id}> Delete </span></MenuItem>
  </IconMenu>
);

const reservationItem = (reservation, handleDelete, handlePurchase) => (
  <ListItem
      leftAvatar={<Avatar src={reservation.shoes.image} />}
      primaryText={reservation.shoes.name}
      rightIconButton={rightIconMenu(reservation, handleDelete, handlePurchase)}
      secondaryText={
        <p>
          <span style={{color: darkBlack}}>{'Php. ' + reservation.shoes.price}    </span>
          <span style={{color: darkBlack}}>{'Size: ' + reservation.size + ' US'}    </span>
          <span style={{color: darkBlack}}>{'Color:  ' + reservation.color}</span> <br/>
          <span>{reservation.getFormattedDate()} </span>
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

const ReservationList = ({state, reservations, close, handleDelete, handlePurchase}) => (
    <div>
        <Dialog
          autoScrollBodyContent={true}
          title="Reservations"
          modal={false}
          open={state}
          actions={closeBtn(close)}
        >
        <div>
    
      <List>
        <Subheader>Pending</Subheader>
        {reservations.map(reservation => reservationItem(reservation, handleDelete, handlePurchase))}
      </List>
    
  </div>
        </Dialog>
    </div>
);


export default ReservationList;