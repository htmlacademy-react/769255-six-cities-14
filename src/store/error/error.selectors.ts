import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getError = (state: State): boolean =>
  state[NameSpace.Error].error;
