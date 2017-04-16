import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from './TextField';
import ChipInput from 'material-ui-chip-input';
import DatePicker from 'material-ui/DatePicker';




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

const DatePickerForm = ({hintText, value, onChange, className}) => (
  <div>
    <DatePicker  hintText={hintText} container="inline" mode="landscape" 
    value={value}  onChange={onChange} className={className} />
  </div>
);


const makeDataChips = (shoes, addChip, deleteChip, dataSource) => (
    <ChipInput
        value={shoes}
        dataSource={dataSource}
        fullWidth={true}
        fullWidthInput={true}
        hintText={'Covered Shoes'}
        floatingLabelText={'Covered Shoes'}
        onRequestAdd={(chip) => addChip(chip)}
        onRequestDelete={(chip, index) => deleteChip(chip, index)}
    />
);

const promoForm = (name, shoes, discount, startDate, endDate, onChange, handleStartDate, handleEndDate) => (
    <div>
        <TextField name='name' hint='Name' value={name} onChange={onChange} />
        <TextField name='discount' hint='Discount' value={discount} onChange={onChange} /> <br/>
        <DatePickerForm hintText={<p> Start Date </p>} value={startDate}  onChange={handleStartDate} /> <br/>
        <DatePickerForm hintText={<p> End Date </p>} value={endDate} onChange={handleEndDate}  />
    </div>
);


const AddPromoForm = ({ state, close, submit, name, shoes, discount, startDate, endDate, dataSource,
     onChange, handleStartDate, handleEndDate, addChip, deleteChip}) => (
    <div>
        <Dialog
            autoScrollBodyContent={true}
            title={"Add Promo"}
            modal={false}
            open={state}
            actions={[
                closeBtn(submit),
                submitBtn(close)
            ]}
        >
            <div>
                <List>
                    {promoForm(name, shoes, discount, startDate, endDate, onChange, handleStartDate, handleEndDate)}
                    {makeDataChips(shoes, addChip, deleteChip, dataSource)}
                </List>

            </div>
        </Dialog>
    </div>
);

export default AddPromoForm;