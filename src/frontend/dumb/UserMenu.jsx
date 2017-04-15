import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Sidebar from './Sidebar'; 
import { Link, Route } from 'react-router-dom';

const UserMenu = ({user, onChange, profile, close, logout, state}) => (
    <div>
        <div>
            <Sidebar user={user} onChange={onChange} state={state} close={close} />
        </div>
    <IconMenu
    iconButtonElement={
        <IconButton> <MoreVertIcon /> </IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical : 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
    <MenuItem
    onTouchTap={profile} 
    primaryText="Profile"
    />
    <MenuItem
    onTouchTap={logout}  
    primaryText={"Logout"}
    containerElement={<Link to="/login"/>}
    />
    </IconMenu>
    </div>
);

export default UserMenu;