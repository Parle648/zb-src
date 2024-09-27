import { useSelector } from 'react-redux';
import styles from './styles/loader.module.scss';

const Loader = () => {
  const isVisible = useSelector((store: any) => store.loading.value);

  return (
    <>
      {isVisible && (
        <div className={styles.wrapper}>
          <span className={styles.loader}></span>
        </div>
      )}
    </>
  );
};

export default Loader;
