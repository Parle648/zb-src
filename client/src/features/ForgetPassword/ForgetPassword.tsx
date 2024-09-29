import { useForm } from 'react-hook-form';
import styles from './styles/forgetPass.module.scss';
import updateUserRequest from './api/updateUser';

interface IForgetPassForm {
  email: string;
  password: string;
}

const ForgetPassword = ({ setIsOpen }: { setIsOpen: any }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgetPassForm>();

  const updateUserPass = (data: IForgetPassForm) => {
    updateUserRequest(data);
  };

  return (
    <div className={styles.modal}>
      <form
        className={styles.modalForm}
        onSubmit={handleSubmit(updateUserPass)}
      >
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
          X
        </button>
        <h4 className={styles.inputTitle}>Enter here youe email</h4>
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

        <h4 className={styles.inputTitle}>Enter new password</h4>
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

        <br />

        <input
          className={styles.submitBtn}
          type="submit"
          value="Update password"
        />
      </form>
    </div>
  );
};

export default ForgetPassword;
