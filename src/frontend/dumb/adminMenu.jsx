import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import { Link, Redirect, Route} from 'react-router-dom';

const styles = {
    menuContainer : {
        width : '20%',
        // margin : 'auto',
    },
    tableContainer : {
        float : 'right',
        marginLeft : '250px',
    }
}

const item = (title, type = '/table/') => (
    <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        primaryText={title}
        containerElement={<Link to={type + title.toLowerCase()}> {title} </Link> }
    />
)


const AdminMenu = ({user}) => (
        <div>
    <div style={styles.menuContainer}>
    <List>
      <Subheader inset={true}>Data Tables</Subheader>
      {item('Accounts')}
      {item('Shoes') }
      {item('Reservations')}
      {item('Purchases')}
      {item('Promos') }
    </List>
    <Divider inset={true} />
    <List>
      <Subheader inset={true}>Charts</Subheader>
      {item('Reservations' , '/graph/') }
      {item('Purchases','/graph/') }
    </List>
    <List>
      <Subheader inset={true}>Functions</Subheader>
      {item('AddShoes', '/')}      
    </List>
    </div>
    </div>
);

export default AdminMenu;