import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Route, Link } from 'react-router-dom';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin : '30px',  
    //hide overflow
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    overflowY : 'hidden',    
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
  imageContainer : {
    width: 200,
    height: 120,
  },
  image : {
    width : '100%',
    height : 'auto',
  },
  tag : {
    // right: '50%',
  },
  grid : {
    // display : 'absolute', 
  }
};

const GridLists = ({tilesData, tag}) => (
  <div>
    <h2 style={styles.tag}> {tag} </h2> <br/>    
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile) => (
        <GridTile
          style={styles.grid}
          key={tile.name}
          title={tile.name}
          containerElement={<Link to={"/shoes/" + tile._id} />}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >        
         <div style={styles.imageContainer}> <img style={styles.image} src={tile.image} /> </div>
        </GridTile>
      ))}
    </GridList>
  </div>
  </div>
);

export default GridLists;