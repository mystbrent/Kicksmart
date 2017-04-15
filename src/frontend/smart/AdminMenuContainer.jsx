import React from 'react';
import AdminMenu from '../dumb/adminMenu';
import app from '../app';
import {Redirect} from 'react-router-dom';

export default class AdminMenuContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user : props.user,
        }

    }

    render() {
        return (
            <div>
            {this.state.user.type === 'Admin' ?
            <AdminMenu/> : 
            <h1> YOU ARE NOT AUTHORIZED. </h1>
            }
             </div>
        )
    }

}