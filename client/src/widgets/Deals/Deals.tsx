import DealCard from '../../entities/DealCard/DealCard';
import styles from './styles/deals.module.scss';
import first from '../../shared/imgs/image-1.png';
import second from '../../shared/imgs/image-2.png';
import third from '../../shared/imgs/image-3.png';
import fourth from '../../shared/imgs/image-4.png';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import getDeals from './api/getDeals';

const imgs = {
  first,
  second,
  third,
  fourth,
};

const Deals = () => {
  const token = useSelector((store: any) => store.token.value);
  const deals = useSelector((store: any) => store.deals.value);

  useEffect(() => {
    getDeals(token);
  }, []);

  return (
    <div className={styles.block} id="#deals">
      <h2 className={styles.title}>Open Deals</h2>
      <div className={styles.grid}>
        {deals.map((deal: any) => {
          return (
            <DealCard
              name={deal.string}
              price={deal.amount_cost}
              yieldPercent={deal.yield}
              soldPercent={deal.sold}
              dealDaysLeft={deal.days_left}
              tiket={deal.tiket_cost}
              background={
                imgs[deal.background as 'first' | 'second' | 'third' | 'fourth']
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Deals;
