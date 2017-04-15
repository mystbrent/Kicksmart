import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link, Route} from 'react-router-dom';

const sidebar = ({state, onChange, user, close}) => (
    <div>
        <Drawer
          docked={false}
          width={200}
          open={state}
          openSecondary={true}
          onRequestChange={onChange}
        >
          <MenuItem containerElement={<Link to="/home"/>} primaryText={user.username} />
          <MenuItem containerElement={<Link to="/reservations"/>} primaryText='Reservations' /> 
          <MenuItem containerElement={<Link to="/purchases"/>} primaryText='Purchases' /> 
          {(user.type === 'Admin') ?
          <MenuItem onTouchTap={close} containerElement={<Link to="/admin"/>} primaryText='Admin Menu' /> 
          : undefined
          }
          <MenuItem
          onTouchTap={close}
          primaryText='Close'/>
        </Drawer>
      </div>
);

export default sidebar;