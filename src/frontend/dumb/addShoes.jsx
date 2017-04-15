import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from './TextField';
import ChipInput from 'material-ui-chip-input';





const submitBtn = (event) => (
    <FlatButton
        label='Close'
        primary={true}
        onTouchTap={event}
    />
);


const closeBtn = (event) => (
    <FlatButton
        label='Create'
        primary={true}
        onTouchTap={event}
    />
);

const shoesForm = (name, brand, gender, price, onChange) => (
    <div>
        <TextField name='name' hint='Name' value={name} onChange={onChange} />
        <TextField name='brand' hint='Brand' value={brand} onChange={onChange} />
        <TextField name='gender' hint='Gender' value={gender} onChange={onChange} />
        <TextField name='price' hint='Price' value={price} onChange={onChange} />
    </div>
);

const colorSource = ['red:30', 'blue:12', 'white:40', 'black:40', 'gray:14'];
const sizeSource = ['7:10', '8:15', '9:20', '10:30', '11:30'];

const makeDataChips = (colors, addChip, deleteChip, hint) => (
    <ChipInput
        value={colors}
        dataSource={(hint.includes('Colors') ? colorSource : sizeSource)}
        fullWidth={true}
        fullWidthInput={true}
        hintText={hint}
        floatingLabelText={hint}
        onRequestAdd={(chip) => addChip(chip)}
        onRequestDelete={(chip, index) => deleteChip(chip, index)}
    />
)


const addShoesForm = ({ state, close, submit, name, brand, gender, price, onChange, colors, sizes, addColorChip, addSizeChip, deleteColorChip, deleteSizeChip }) => (
    <div>
        <Dialog
            autoScrollBodyContent={true}
            title={"Add Shoes"}
            modal={false}
            open={state}
            actions={[
                closeBtn(submit),
                submitBtn(close)
            ]}
        >
            <div>
                <List>
                    {shoesForm(name, brand, gender, price, onChange)}
                    {makeDataChips(colors, addColorChip, deleteColorChip, 'Add Colors Format: (Color:Quantity)')}
                    {makeDataChips(sizes, addSizeChip, deleteSizeChip, 'Add Sizes Format: (Size:Quantity)')}
                </List>

            </div>
        </Dialog>
    </div>
);

export default addShoesForm;