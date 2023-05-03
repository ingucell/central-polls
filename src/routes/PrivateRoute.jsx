import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import store from '../store';


const PrivateRoute = ({ user, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      user ? <Component {...props} /> : <Redirect to={ROUTES.LOGIN} />
    }
  />
);

const mapStateToProps = state => {
  return { user: store.getState().auth.user };
};

export default connect(mapStateToProps)(PrivateRoute);
