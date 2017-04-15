import React from 'react';
import TextField from './TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

const buttons = (evt, evt2) => (
        <div>
        <FlatButton
        label='Purchase'
        primary={true}
        onTouchTap={evt}
      />
      <Link to="/store">
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={evt2}
      />
      </Link>
      </div>
    );

const purchaseForm = ({onChange, address, handleDone, handleCancel, purchaseOpen}) => (
    <div>
    <Dialog
    title="Purchase Form"
    actions={buttons(handleDone, handleCancel)}
    modal={true}
    open={purchaseOpen}
    >
    <TextField name='body' hint={'Billing Address'} value={address} multi={true} rows={3} onChange={onChange}/>
    </Dialog>
    </div>
);

export default purchaseForm;