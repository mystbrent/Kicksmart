import React from 'react';
import RegisterForm from '../dumb/RegisterForm';
import app from '../app';
import {Redirect} from 'react-router-dom';

export default class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
         open: true,
         username : '',
         password : '',
         passwordConfirmation: '',
         email : '',
         address : '',
         name : '',
         user : props.user,
         successful : false,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

   handleChange(event) {
     const field = event.target.name;
     this.setState({[field] : event.target.value});
  }
  
  async handleRegister() {
    const service = app.service('/api/accounts');
    const data = {
      username : this.state.username,
      password : this.state.password,
      passwordConfirmation: this.state.passwordConfirmation,
      email : this.state.email,
      address : this.state.address,
      name : this.state.name,
      type : 'Regular',
    }
    const isValid = await service.create(data);
    if (isValid) {
      this.setState({successful : true});
    }
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        {
          (this.state.user || this.state.successful) ?
          <Redirect to='/login'/> :
          <RegisterForm 
            state={this.state.open}
            close={this.handleClose}
            submit={this.handleRegister}
            onChange={this.handleChange}
            username={this.state.username}
            password={this.state.password}
            passwordConfirmation={this.state.passwordConfirmation}
            email={this.state.email}
            address={this.state.address}
            name={this.state.name} 
          />
        }
      </div>
    );
  }
}