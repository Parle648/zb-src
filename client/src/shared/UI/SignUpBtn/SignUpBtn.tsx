import { Link } from 'react-router-dom';
import styles from './styles/signUp.module.scss';

const SignUpLink = () => {
  return (
    <Link className={styles.button} to="/sign-up">
      Sign up
    </Link>
  );
};

export default SignUpLink;
