'use strict';
import React, {
  Component,
  View,
  TouchableNativeFeedback,
  Text,
} from 'react-native';
import {
  actions as routerActions,
  NavBar,
  Route,
  Router,
  Schema,
  TabBar,
  TabRoute
} from 'react-native-router-redux';
import * as Action from '../actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginPage from '../pages/login';

const mapStateToProps = state => ({
  router: state.router,
  login: state.login,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...routerActions,
  }, dispatch),
  dispatch,
});

const defaultSchema = {
  navBar: NavBar,
  navLeftColor: '#FFFFFF',
  navTint: '#224655',
  navTitleColor: '#FFFFFF',
  navTitleStyle: {
    fontFamily: 'Avenir Next',
    fontSize: 18,
  },
};

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <Router {...this.props} initial="Login">
        <Route name="Login" component={LoginPage} type="reset"/>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
