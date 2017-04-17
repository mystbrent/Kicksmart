import React from 'react';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Route, Link, Redirect } from 'react-router-dom';
import UserMenu from './UserMenu';
import NoUserMenu from './NoUserMenu';

import GridContainer from '../smart/GridContainer';
import StoreContainer from '../smart/StoreContainer';

const styles = {
    button: {
        margin: 12,
        backgroundColor: 'transparent',
    },
    appBar: {
        flexWrap: 'wrap',
    },
    tabs: {
        width: '100%',
        zIndex : 1,
    },
    image : {
        position : 'absolute',
        maxWidth: '190px',
        maxHeight: '190px',
        width: 'auto',
        height: 'auto',
        zIndex : 2,
        top : '-40px',
     },

}

const header = ({ user, profile, close, state, logout, openLogin, successful }) => (
    <div>
        <AppBar
            title={<img style={styles.image} src='/images/logo.png' />}
            style={styles.appBar}
            showMenuIconButton={false}
            iconElementRight={user ?
                <UserMenu user={user} close={close} profile={profile} logout={logout} state={state} />
                : <NoUserMenu openLogin={openLogin} />}
        >
            <Tabs style={styles.tabs}>
                <Tab
                    icon={<FontIcon className='material-icons'>cloud_download</FontIcon>}
                    label="TAGS"
                    containerElement={<Link to="/home" />}
                />
                <Tab
                    icon={<FontIcon className='material-icons'>home</FontIcon>}
                    containerElement={<Link to="/store" />}
                    label="HOME"
                />
            </Tabs>

        </AppBar>
        {
            (!successful) ?
                <Redirect to='/login' />
                : <Redirect to='/store' />


        }
    </div>
);

export default header;

                    // <Route path='/home' component={() => <GridContainer user={user} />} />
                    // <Route path='/store' component={() => <StoreContainer user={user} />} />