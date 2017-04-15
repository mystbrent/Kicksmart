import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const styles = {
  bodyStyle : {
    overflow:'visible',
  },
  wrapper : {
    position : 'absolute',
    top : '65%',
    marginTop : '-270px',
  },
  header : {
    marginRight : '60px',
  },
  container : {
    display : 'absolute',
  }
}

function sanitizeData(data) {
  if(data instanceof Array) {
    return data.length;
  }
  else if (data instanceof Object) {
    // return data.toString();
    return data.name;
  }
  return data;
}

const makeUserData = (doc) => (
    <TableRow>
    {doc.map(val => makeDataValue(val))}
    </TableRow>
);

const makeDataValue = (val) => (
  <TableRowColumn>{sanitizeData(val)}</TableRowColumn>
)

const makeDataProperty = (prop) => (
  <TableHeaderColumn style={styles.header}>{prop}</TableHeaderColumn>
)
// 
const getDataProperties = (doc) => (
    doc.map(prop => makeDataProperty(prop))
)


const TableExampleSimple = ({data, properties}) => 
(
      <div style={styles.wrapper}>
  <Table
  bodyStyle={styles.bodyStyle}
  multiSelectable={true}

  >
    <TableHeader>
      <TableRow style={styles.container}>
        {getDataProperties(properties)}
      </TableRow>
    </TableHeader>
    <TableBody style={styles.container}>
      {data.map(doc => makeUserData(Object.values(doc)) )}
    </TableBody>
  </Table>
  </div>
);

export default TableExampleSimple;

  // onCellClick={(col, row) => alert(row + ' is the row & ' + col + ' is the col')
  // onRowSelection={(rows) => alert(rows)