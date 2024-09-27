import LoginForm from '../../features/LoginForm/LoginForm';
import authImg from '../../shared/imgs/auth-background.png';
import styles from './styles/signUpForm.module.scss';

const LoginWidget = () => {
  return (
    <div className={styles.LoginWidget}>
      <img className={styles.asideImg} src={authImg} alt="authImg" />
      <LoginForm />
    </div>
  );
};

export default LoginWidget;
