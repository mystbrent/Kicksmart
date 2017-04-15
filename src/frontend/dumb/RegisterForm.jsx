import React from 'react';
import TextField from './TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../theme';
import { Link, Route } from 'react-router-dom';

const styles = {
  dialog : {
        width: '100%',
        height : '100%',
        maxWidth: 'none',
        maxHeight : 'none',
  },
  dialogContent : {
      textAlign : 'center',
  }
};

const buttons = (evt, evt2) => (
        <div>
        <FlatButton
        label="Register"
        primary={true}
        onTouchTap={evt}
      />
      <Link to="/">
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={evt2}
      />
      </Link>
      </div>
    )

const RegisterForm = ({state, close, submit, onChange, username, password, passwordConfirmation, email, address, name}) => (
    <MuiThemeProvider muiTheme={theme}>
    <div>
        <Dialog
          title="Register"
          actions={buttons(submit, close)}
          autoScrollBodyContent={true}
          modal={true}
          open={state}
          bodyStyle={styles.dialog}
          contentStyle={styles.dialogContent}
        >
        <TextField name='username' hint='Username'  value={username} onChange={onChange}/>
        <TextField name='password' type='password' hint='Password' type='password' value={password} onChange={onChange}/>
        <TextField name='passwordConfirmation' type='password' hint='Password Confirmation' type='password' value={passwordConfirmation} onChange={onChange}/>
        <TextField name='email' hint='Email' value={email} onChange={onChange} />
        <TextField name='address' hint='Home Address' value={address} onChange={onChange} />
        <TextField name='name' hint='Full Name' value={name} onChange={onChange} />
          Copryight 2017.
        </Dialog>
    </div>
    </MuiThemeProvider>

);

export default RegisterForm;