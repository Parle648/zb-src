import SignUpForm from '../../features/SignUpForm/SignUpForm';
import authImg from '../../shared/imgs/auth-background.png';
import styles from './styles/signUpForm.module.scss';

const SignUpWidget = () => {
  return (
    <div className={styles.signUpWidget}>
      <img className={styles.asideImg} src={authImg} alt="authImg" />
      <SignUpForm />
    </div>
  );
};

export default SignUpWidget;
