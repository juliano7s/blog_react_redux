import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from "./components/posts_new";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export const POSTS_NEW_ROUTE = '/posts/new';

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
          <Switch>
              <Route path={POSTS_NEW_ROUTE} component={PostsNew} />
              <Route path="/" component={PostsIndex} />
          </Switch>
        </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
