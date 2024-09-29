import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import IForm from './types/IForm';
import { Link } from 'react-router-dom';
import styles from './styles/signUpForm.module.scss';
import authRequest from './api/createUserRequest';
import ForgetPassword from '../ForgetPassword/ForgetPassword';

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const authentificate = (data: IForm) => {
    authRequest(data);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div>
      <form
        className={styles.loginForm}
        onSubmit={handleSubmit(authentificate)}
      >
        <h2 className={styles.formTitle}>Login</h2>

        <h4 className={styles.inputTitle}>Email</h4>
        <input
          className={styles.input}
          type="text"
          placeholder="example@gmail.com"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}

        <h4 className={styles.inputTitle}>Password</h4>
        <input
          className={styles.input}
          type="password"
          placeholder="password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
          })}
        />
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}

        <h4 className={styles.forgetTitle} onClick={toggleModal}>
          Forget password
        </h4>

        <input className={styles.submitBtn} type="submit" value="Login" />

        <div className={styles.loginPrompt}>
          Don't have an account?{' '}
          <Link className={styles.loginLink} to="/sign-up">
            Sign up
          </Link>
        </div>
      </form>
      {isOpen && <ForgetPassword setIsOpen={setIsOpen} />}
    </div>
  );
};

export default LoginForm;
