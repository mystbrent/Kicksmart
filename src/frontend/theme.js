import React from 'react';
import {darkBlack, lightBlue200, indigo400, greenA200} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const theme = getMuiTheme({
  palette: {
    textColor: darkBlack,
    primary1Color : indigo400,
    primary2Color: lightBlue200,
    accent1Color: greenA200,
  },
  appBar: {
    height: 50,
  },
});

export default theme;