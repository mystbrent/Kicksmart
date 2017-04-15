import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

const styles = {
  listItem : {
    maxHeight : 36,
  }
}

const promoItem = (promo, shoes) => (
  <ListItem
      primaryText={promo.name}
      secondaryText={
        <p>
          <span style={{color: darkBlack}}>{'Discount: ' + promo.discount * 100 + '%' }</span> <br/>
          {/*<span>Start Date : {promo.getFormattedStartDate()} </span> <br/>*/}
          <span>End Date : {promo.getFormattedEndDate()} </span>
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

const promoList = ({state, promos, close, shoes}) => (
    <div>
        <Dialog
          title={"Promos"}
          modal={false}
          open={state}
          actions={closeBtn(close, shoes)}
        >
        <div>
    
      <List>
        <Subheader>Ongoing Promos</Subheader>
        {promos.map(promo => promoItem(promo, shoes))}
      </List>
    
  </div>
        </Dialog>
    </div>
);


export default promoList;