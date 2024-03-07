import React from 'react';
  
  const Config = () =>  {
	return (
	  <div>
	  </div>
	);
  }
  
  export default Config;

export const DEFAULT_PATHS = {
  APP: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  USER_WELCOME: '/dashboards/default',
  NOTFOUND: '/page-not-found',
  UNAUTHORIZED: '/unauthorized',
  INVALID_ACCESS: '/invalid-access',
};



export const REDUX_PERSIST_KEY = 'elearning-portal';
