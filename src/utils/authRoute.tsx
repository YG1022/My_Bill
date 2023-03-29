import React from 'react';
import SignIn from '../pages/SignIn/SignIn';

const authRoute = props => {
  const isSignIn = false;

  return isSignIn ? props : <SignIn />;
};
export { authRoute };
