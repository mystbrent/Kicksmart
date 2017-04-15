import React from 'react';
// import TextField from './TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import { Rating } from 'material-ui-rating';
import TextField from './TextField';

    const buttons = (evt, evt2) => (
        <div>
        <FlatButton
        label='Done'
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

    const ratingField = (value, handleRating) => (
        <Rating
          value={value}
          max={10}
          onChange={handleRating}
        />
    );

const ReviewForm = ({onChange, state, shoes, reviewValue, rating, handleRating, handleCancel, handleSubmit}) => (
    <div>
    <Dialog
    title="Review"
    actions={buttons(handleSubmit, handleCancel)}
    modal={true}
    open={state}
    >
    {/*<div> {textField(shoes, reviewValue, onChange)} </div>*/}
    <TextField name='body' hint={shoes.name} value={reviewValue} multi={true} rows={3} onChange={onChange}/>
    <div> {ratingField(rating, handleRating)} </div>
    </Dialog>
    </div>
    );

export default ReviewForm;