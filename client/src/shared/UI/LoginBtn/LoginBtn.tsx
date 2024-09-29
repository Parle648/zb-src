import { Link } from 'react-router-dom';
import styles from './styles/loginBtn.module.scss';

const LoginBtn = () => {
  return (
    <Link className={styles.button} to="/login">
      Login
    </Link>
  );
};

export default LoginBtn;
