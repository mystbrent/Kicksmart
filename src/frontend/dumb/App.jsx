import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../theme';
import AppBar from './AppBar';
import TextField from './TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Link, Route} from 'react-router-dom';

import RegisterContainer from '../smart/RegisterContainer';
import StoreContainer from '../smart/StoreContainer';
import GridContainer from '../smart/GridContainer';
import CardContainer from '../smart/CardContainer';
import PromoContainer from '../smart/PromoContainer';
import ReviewContainer from '../smart/ReviewsContainer';
import ReservationContainer from '../smart/ReservationContainer';
import PurchaseContainer from '../smart/PurchaseContainer';
import ReviewFormContainer from '../smart/ReviewFormContainer';
import AdminMenuContainer from '../smart/AdminMenuContainer';
import TableContainer from '../smart/TableContainer';
import ShoesChartContainer from '../smart/ShoesChartContainer';
import AddShoesContainer from '../smart/AddShoesContainer';

const buttons = (evt, evt2, successful) => (
        <div> 
            <FlatButton
            label='Login'
            primary={true}
            onTouchTap={evt}
            containerElement={ <Link to="/store"/>}
            />
        
            <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={evt2}
            containerElement={<Link to="/" />}
            />
      </div>
    );

const LoginForm = ({onChange, state, login, cancel, username, password, successful}) => (
    <div>
    <Dialog
    title="Login"
    actions={buttons(login, cancel, successful)}
    modal={true}
    open={state}
    >
    <TextField name='username' hint='Username' value={username} onChange={onChange}/>
    <TextField name='password' hint='Password' type='password' value={password} onChange={onChange}/>
    </Dialog>
    </div>
    );



const App = ({user, profile, close, state, 
    logout, loginOpen, openLogin, handleChange, handleLogin, 
     username, password, closeLogin, successful}) => {
    return(
        <MuiThemeProvider muiTheme={theme}>
        <div>
        <AppBar profile={profile} user={user} successful={successful}
    close={close} state={state} logout={logout} openLogin={openLogin}
          />
        <LoginForm onChange={handleChange} state={loginOpen} login={handleLogin} 
        username={username} password={password} cancel={closeLogin} successful={successful} />

        <div>
        <Route path='/register' component={() => <RegisterContainer user={user}/>} />
        <Route path='/home' component={() => <GridContainer user={user} />} />
        <Route path='/store' component={() => <StoreContainer user={user} />} />    
        <Route path="/shoes/:name" component={(props) => <CardContainer props={props} user={user}/>}/>
        <Route path="/reviews/:name" component={(props) => <ReviewContainer props={props} />}/>
        <Route path="/promos/:name" component={(props) => <PromoContainer props={props} />}/>
        <Route path="/reservations" component={() => <ReservationContainer user={user} />} />
        <Route path="/purchases" component={() => <PurchaseContainer user={user} />} />
        <Route path="/makeReview/:name" component={(props) =><ReviewFormContainer props={props} user={user}/>} />
        <Route path="/admin" component={() => <AdminMenuContainer user={user} />}/>
        <Route path="/table/:name" component={(props) => <TableContainer props={props} user={user} />} />
        <Route path="/graph/:name" component={(props) => <ShoesChartContainer props={props} user={user} />} />
        <Route path="/addshoes" component={() => <AddShoesContainer user={user} />} />
        </div>

        </div>
        </MuiThemeProvider>
    );
};

export default App;
