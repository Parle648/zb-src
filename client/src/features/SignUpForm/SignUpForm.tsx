import { FC } from 'react';
import { useForm } from 'react-hook-form';
import IForm from './types/IForm';
import { Link } from 'react-router-dom';
import styles from './styles/signUpForm.module.scss';
import createUserRequest from './api/createUserRequest';

const SignUpForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const authentificate = (data: IForm) => {
    console.log(data);
    createUserRequest(data);
  };

  return (
    <form className={styles.signUpForm} onSubmit={handleSubmit(authentificate)}>
      <h2 className={styles.formTitle}>Sign up</h2>

      <h4 className={styles.inputTitle}>Name</h4>
      <input
        className={styles.input}
        type="text"
        placeholder="name"
        {...register('name', {
          required: 'Name is required',
        })}
      />
      {errors.name && <p className={styles.error}>{errors.name.message}</p>}

      <h4 className={styles.inputTitle}>Email</h4>
      <input
        className={styles.input}
        type="email"
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

      <input className={styles.submitBtn} type="submit" value="Sign up" />

      <div className={styles.loginPrompt}>
        Already have an account?{' '}
        <Link className={styles.loginLink} to="/login">
          Login
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
