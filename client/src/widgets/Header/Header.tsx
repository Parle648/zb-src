import { useSelector } from 'react-redux';
import LoginBtn from '../../shared/UI/LoginBtn/LoginBtn';
import SignUpLink from '../../shared/UI/SignUpBtn/SignUpBtn';
import styles from './styles/header.module.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Header = () => {
  const token = useSelector((store: any) => store.token.value);
  const nav = useNavigate();

  const goToMain = () => {
    nav('/');
  };

  useEffect(() => {
    if (token !== '') {
      goToMain();
    }
  }, [token]);
  return (
    <header className={styles.header}>
      {token === '' && (
        <>
          <LoginBtn />
          <SignUpLink />
        </>
      )}
    </header>
  );
};

export default Header;
