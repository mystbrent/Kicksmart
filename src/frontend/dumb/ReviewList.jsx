import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {grey400, darkBlack} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';



const reviewItem = (review) => (
  <ListItem
      primaryText={'Reviewer: ' + review.account}
      secondaryText={
        <p>
          <span style={{color: darkBlack}}>{'Says: ' + review.desc}</span> <br/>
          <span>{'Rating: ' + review.rating} </span>
        </p>
      }
      secondaryTextLines={2}
    />
);

const closeBtn = (touchTap, shoes) => (
        <FlatButton
        label={<Link to={"/shoes/" + shoes._id}> Close </Link>}
        primary={true}
        onTouchTap={touchTap}
        />
);

const reviewList = ({state, reviews, close, shoes}) => (
    <div>
        <Dialog
         autoScrollBodyContent={true}
          title="Reviews"
          modal={false}
          open={state}
          actions={closeBtn(close, shoes)}
        >
        <div>
    
      <List>
        <Subheader>All Reviews</Subheader>
        {reviews.map(review => reviewItem(review))}
        
      </List>
    
  </div>
        </Dialog>
    </div>
);


export default reviewList;