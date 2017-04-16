import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../theme';
import { Link } from 'react-router-dom';
import ReviewList from './ReviewList';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card : {
      width : '80%',  
  },
  image : {
    display : 'block',
    maxWidth: '500px',
    maxHeight: '500px',
    width: 'auto',
    height: 'auto',
  },
};

const makeSizeChip = (shoes, size, handleTap) => (
    (shoes.hasSizeAvailable(size.size)) ?
    <Chip
    style={styles.chip}
    onTouchTap={handleTap}
    >
    <Avatar size={32} >
    {'US'}
    </Avatar>
    {size.size}
    </Chip>
    : <span></span>
);



const makeColorChip = (shoes , color, handleTap) => (
    (shoes.hasColorAvailable(color.color)) ?
    <Chip
    style={styles.chip}
    onTouchTap={handleTap}
    >
    <Avatar size={32} color={color.color} backgroundColor={color.color}>
    </Avatar>
    {color.color}
    </Chip>
    : <span></span> 
);

const CardDesign = ({shoes, reserve, user, handleColorTap, handleSizeTap, size, color, promos}) => (
    <div style={styles.div}>
  <Card style={styles.card}>
    <CardHeader
      title={shoes.brand}
      subtitle={shoes.gender}
      avatar={shoes.brandIcon}
    />
    <CardMedia overlay={<CardTitle title={shoes.name}
     subtitle={<span> {(shoes.hasPromo()) ? <p> Php <strike> {shoes.price.toFixed(2)} </strike> to Php {shoes.getTotalPrice().toFixed(2)} </p> : 
     <p> Php {shoes.getTotalPrice().toFixed(2)} </p>} 
     {(shoes.hasReview()) ? <p> Average Rating: {shoes.getAverageRating().toFixed(2)} </p> : <p> NO REVIEWS </p>} </span> } /> } >
     
      <img style={styles.image}  src={shoes.image} />
      
    </CardMedia>
    <div style={styles.wrapper}> 
        <p> {color ? 'Selected: ' + color : 'Available Colors:'} </p> 
        {shoes.availableColors.map(color => makeColorChip(shoes, color, handleColorTap))} 
    </div>
    <div style={styles.wrapper}>
        <p> {size ? 'Selected: ' + size : 'Available Sizes:'} </p> 
        {shoes.availableSizes.map(size => makeSizeChip(shoes, size, handleSizeTap))}
    </div>

    <CardActions>
      {(shoes.isAvailable() && 
       user &&
       user.hasReserveAllocation()
       && !user.hasReservedItem(shoes.name)) ? <FlatButton
       onTouchTap={reserve}
       label={'Reserve'} /> : <FlatButton label={<Link to={'/register'}> Login to Reserve </Link>} />}
      <FlatButton
      label={<Link to={"/reviews/" + shoes._id} >See Reviews </Link>} />
      {(promos.length > 0) ?
      <FlatButton
      label={<Link to={"/promos/" + shoes._id} >See Promos </Link>} /> : ''}
    </CardActions>
    
  </Card>
  </div>
);

/*<br/> Average Rating: {(shoes.getAverageRating() > 0) ? shoes.getAverageRating() : 'NO REVIEWS' } </span>*/

export default CardDesign;