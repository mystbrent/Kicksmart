import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Route, Link } from 'react-router-dom';

const GuestMenu = ({openLogin}) => (
    <div>
    <IconMenu
    iconButtonElement={
        <IconButton> <MoreVertIcon /> </IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical : 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
     <MenuItem onTouchTap={openLogin} primaryText="Login"/> 
     <MenuItem containerElement={<Link to="/register"/>} primaryText="Register"/>
    </IconMenu>

    </div>
);

export default GuestMenu;