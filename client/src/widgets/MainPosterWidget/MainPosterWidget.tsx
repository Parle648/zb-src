import background from '../../shared/imgs/mainbanner.png';
import styles from './styles/banner.module.scss';

const MainPosterWidget = () => {
  return (
    <div className={styles.block}>
      <img className={styles.background} src={background} alt="background" />
      <h1 className={styles.title}>The chemical negatively charged</h1>
      <p className={styles.description}>
        Numerous calculations predict, and experiments confirm, that the force
        field reflects the beam, while the mass defect is not formed. The
        chemical compound is negatively charged. Twhile the mass defect is
      </p>

      <a className={styles.startBtn} href="#deals">
        Get Started
      </a>
    </div>
  );
};

export default MainPosterWidget;
