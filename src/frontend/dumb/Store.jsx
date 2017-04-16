import React from 'react';
import TextField from './TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../theme';
import Paper from './Paper';
import SelectField from 'material-ui/SelectField';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import { Route, Link } from 'react-router-dom';
import CardContainer from '../smart/CardContainer';

const styles = {
    searchBar : {
        marginTop : '50px',
    },
    searchFilter : {
        marginTop : '10px',
    },
    select : {
        width : 150,
    },
};

const items = [
  <MenuItem key={1} value={'All'} primaryText="All" />,
  <MenuItem key={11} value={'Name'} primaryText="Name" />,
  <MenuItem key={2} value={'Budget'} primaryText="Budget" />,
  <MenuItem key={3} value={'Size'} primaryText="Size" />,
  <MenuItem key={4} value={'Color'} primaryText="Color" />,
  <MenuItem key={8} value={'Brand'} primaryText="Brand" />,
];


const allShoes = (shoes) => (
    <div>
    {shoes.map(shoe => <Paper shoes={shoe} />)}
    </div>
);


const store = ({searchValue, shoes, handleChange, handleSelectChange, selectValue, dataSource}) => (
    <div>
        <div style={styles.searchBar}>
             <AutoComplete
             hintText={'Search'}
             dataSource={dataSource}
             name={'searchValue'}
             onUpdateInput={handleChange}
             value={searchValue}
             />
        </div>

        <div style={styles.searchFilter}>
            <SelectField
            value={selectValue}
            onChange={handleSelectChange}
            floatingLabelText="Search Filter"
            floatingLabelFixed={true}
            hintText="Search Filter"
            >
            {items}
            </SelectField>
        </div>

        {allShoes(shoes)}
        
    </div>
);



export default store;