import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


// COMPONENTS and STYLES
import { Navbar } from './components';
import './scss/common.scss';

// VIEWS
import MainView from './views/MainView';
import InfoView from './views/InfoView';
import NotFoundView from './views/NotFoundView';

import ProjectManageView from './views/ProjectManageView';
import UsersView from './views/UsersView';
import UserDetailView from './views/UserDetailView';
import RequestManageView from './views/RequestManageView';
import TokenManageView from './views/TokenManageView';
import UserAdminAuthView from './views/UserAdminAuthView';

// ROUTER
import { Router, Route, Switch } from 'react-router-dom';

// REDUX
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import rootReducer from './modules';

import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const store = createStore(rootReducer, applyMiddleware(Thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={MainView}></Route>
            <Route exact path="/users" component={UsersView}></Route>
            <Route path="/users/:user_name" component={UserDetailView}></Route>
            <Route path="/projects" component={ProjectManageView}></Route>
            <Route path="/info" component={InfoView} />
            <Route path="/requests" component={RequestManageView} />
            <Route path="/tokens" component={TokenManageView} />
            <Route path="/admin_auth" component={UserAdminAuthView} />
            <Route path="*" component={NotFoundView} />
          </Switch>
        </>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
