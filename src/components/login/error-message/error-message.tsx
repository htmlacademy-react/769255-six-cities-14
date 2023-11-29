import { useAppSelector } from '../../../hooks';
import { getAuthError } from '../../../store/user/user.selectors';
import styles from './error-message.module.css';

export default function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getAuthError);
  return error ? <div className={styles.errorMessage}>{error}</div> : null;
}
