import { useAppSelector } from '../../hooks';
import styles from './error-message.module.css';

export default function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state.error.error);

  return error ? <div className={styles.errorMessage}>{error}</div> : null;
}
