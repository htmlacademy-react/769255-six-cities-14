import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';

export const requireAuthorization = createAction<AuthorizationStatus>(
  'USER/requireAuthorization'
);

export const redirectToRoute = createAction<AppRoute>('USER/redirectToRoute');
