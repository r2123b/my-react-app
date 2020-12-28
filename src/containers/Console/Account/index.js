import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import Profile from '@/components/Profile';

const Account = () => {
  const { url } = useRouteMatch();

  return (
      <Switch>
        <Route path={`${url}/profile`} component={Profile} />
        <Redirect from={url} to={`${url}/profile`} />
      </Switch>
  );
};

export default Account;
