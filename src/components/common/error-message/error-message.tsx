import { useAppSelector } from '../../../hooks';
import { getError } from '../../../store/error/error.selectors';
import styles from './error-message.module.css';

export default function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);
  return error ? <div className={styles.errorMessage}>{error}</div> : null;
}
