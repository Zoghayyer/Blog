// Ahmed Zoghayyer
import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import '../../styles/_base.scss';
import MainNavbar from '../main-navbar';
import Login from '../../routes/login';
import NotFound from '../../routes/not-found';
import Posts from '../../routes/posts';
import CreatePost from '../../routes/create-post';

const CoreView = (props) => (
  <div>
    <MainNavbar />
    <div id="app-content" className="container-fluid">
      <Switch>
        <Route
          exact
          path="/blogs/:key?"
          component={Posts}
        />
        <Route
          exact
          path="/createPost"
          component={CreatePost}
        />
        <Route
          exact
          path="/"
          component={Login}
        />
        <Route
          component={NotFound}
        />
      </Switch>
    </div>
  </div>
);

export default CoreView;
