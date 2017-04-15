import React from 'react';
import App from '../dumb/App';
import app from '../app';
import Account from '../../models/Account';

export default class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user : undefined,
            open : false,
            loginIsOpen : false,
            username : '',
            password : '',
            successful : false,
        }
        this.handleProfile = this.handleProfile.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.openLogin = this.openLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.closeLogin = this.closeLogin.bind(this);
    }
    closeLogin() {
        this.setState({loginIsOpen : false, username : '', password : '',});
    }

    handleChange(event) {
        const field = event.target.name;
        this.setState({[field] : event.target.value});
    }

    async getLoggedInUser() {
        const result = await app.authenticate();
        const payload = await app.passport.verifyJWT(result.accessToken);
        const service = app.service('/api/accounts');
        let user = await service.get(payload.userId);
        if (user) {
            user = new Account(user);
            this.setState({user});
        }
        return undefined;
    }

    async handleLogin(event) {
        try {
        const result = await app.authenticate({
            strategy : 'local',
            username : this.state.username,
            password : this.state.password,
        });
        const payload = await app.passport.verifyJWT(result.accessToken);
        const service = app.service('/api/accounts');
        let user = await service.get(payload.userId);
        if (user) {
        user = new Account(user);
        this.setState({user, successful : true, loginIsOpen : false});
        console.log(user, ' this is the user');
        }
        }
        catch(err) {
            
        }
    }

    openLogin() {
        this.setState({loginIsOpen : true});
    }

    handleProfile() {
        this.setState({open : true});
    }
    
    handleClose() {
        this.setState({open : false});
    }

    async handleLogout() {
        await app.logout();
        this.setState({user : undefined, username : '', password : '', successful : false, loginIsOpen : true});
    }

    componentDidMount() {
        this.getLoggedInUser();
    }


    render() {
        return(
            <div>
                <App
                profile={this.handleProfile}
                close={this.handleClose} 
                user={this.state.user}
                logout={this.handleLogout}
                state={this.state.open}
                loginOpen={this.state.loginIsOpen}
                openLogin={this.openLogin}
                handleChange={this.handleChange}
                handleLogin={this.handleLogin}
                username={this.state.username}
                password={this.state.password}
                closeLogin={this.closeLogin}
                successful={this.state.successful}
                 />
            </div>
        )
    }

};