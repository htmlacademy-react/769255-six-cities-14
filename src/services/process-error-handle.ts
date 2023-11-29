import { store } from '../store';
import { clearErrorAction, setError } from '../store/user/user.slice';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
