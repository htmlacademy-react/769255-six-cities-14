import { AuthorizationStatus, NameSpace } from '../../const';
import { State, TUserProcess } from '../../types/state';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;

export const getUser = (state: State): TUserProcess => state[NameSpace.User];
