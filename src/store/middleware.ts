import { Middleware, PayloadAction } from '@reduxjs/toolkit';

import browserHistory from '../browser-history';
import { rootReducer } from './root-reducer';
import { redirectToRoute } from './actions';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  () => (next) => (action: PayloadAction<string>) => {
    if (action.type === redirectToRoute.type) {
      browserHistory.push(action.payload);
    }

    return next(action);
  };
