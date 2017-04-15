import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {silver500} from 'material-ui/styles/colors';

const theme = getMuiTheme({
  palette: {
    // textColor: silver500,
  },
  appBar: {
    // height: 50,
  },
});

export default theme;