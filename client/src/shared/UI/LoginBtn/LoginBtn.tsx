import styles from './styles/loginBtn.module.scss';

const LoginBtn = () => {
  return (
    <a className={styles.button} href="/login">
      Login
    </a>
  );
};

export default LoginBtn;
