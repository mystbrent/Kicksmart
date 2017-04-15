import React from 'react';
import TextField from 'material-ui/TextField';

const textField = ({type='text', value = '',name, hint, error='', onChange, multi = false, rows = 1}) => (
    <div>
    <TextField
      type={type}
      name={name}
      hintText={hint}
      errorText={error}
      floatingLabelText={hint}
      value={value}
      onChange={onChange}
      fullWidth={true}
      multiLine={multi}
      rows={rows}
    />
    </div>
)

export default textField;