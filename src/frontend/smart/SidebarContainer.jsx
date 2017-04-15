import React from 'react';
import Sidebar from '../dumb/Sidebar';
import app from '../app';

export default class SidebarContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log(props, ' da props');
        this.state = {
            open : true,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        // alert('wahahaha');
        if (open) {
            this.setState({open : false});
        }
        else {
            this.setState({open : true});
        }
    }

    render() {
        return(
            <Sidebar
            state={this.state.open}
            />
        );
    }
}