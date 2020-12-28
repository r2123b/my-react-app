import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import NotFound from '@/components/NotFound';
import VideoComponent from '@/components/Video'

import configureStore from '@/redux/stores/configureStore';

const store = configureStore();

const ConsoleIndex = () => {
  const { url } = useRouteMatch();
  return (
    <Provider store={store}>
      <Switch>
        {<Route exact path={url} render={() => <Redirect to={'/video/videoList'} />} />}
        <Route path={`${url}/videoList`} component={VideoComponent} />
        {<Route component={NotFound} />}
      </Switch>
    </Provider>
  );
};

export default ConsoleIndex;
