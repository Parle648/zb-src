import { Link } from 'react-router-dom';
import styles from './styles/dealCard.module.scss';

const DealCard = ({
  id,
  name,
  price,
  tiket,
  yieldPercent,
  soldPercent,
  dealDaysLeft,
  background,
}: {
  id: string,
  name: string;
  price: number;
  tiket: number;
  yieldPercent: number;
  soldPercent: number;
  dealDaysLeft: number;
  background: any;
}) => {
  return (
    <Link to={`/deal/${id}`} className={styles.card}>
      <img className={styles.background} src={background} alt="background" />
      <div className={styles.innerWrapper}>
        <div className={styles.dealInfo}>
          <h3 className={styles.dealsName}>{name}</h3>
          <div className={styles.dealPrice}>{price} Dhs</div>
          <div className={styles.dealPrice}>Tiket - {tiket}</div>
        </div>
        <div>
          <div className={styles.dealYield}>Yield {yieldPercent}%</div>
          <div className={styles.dealDaysLeft}>Days left {dealDaysLeft}</div>
        </div>
        <div>
          <div className={styles.dealSold}>Sold {soldPercent}%</div>
        </div>
      </div>
    </Link>
  );
};

export default DealCard;
