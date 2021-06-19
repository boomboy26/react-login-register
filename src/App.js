import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Login from './screens/Login';
import Home from './screens/Home';
import Register from './screens/Register';
import PageNotFound from './screens/PageNotFound';
import AddApartment from './screens/AddApartment';
import Apartment from './screens/Apartment';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Switch>
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
          <Route path='/addapart' component={AddApartment} />
          <Route path='/apartment' component={Apartment} />
          <Route path='/' exact component={Home} />
          <Route path='/404' exact component={PageNotFound} />
          <Redirect to='/404' />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
