import { useSelector } from 'react-redux';
import DealCard from '../entities/DealCard/DealCard';
import { useParams } from 'react-router-dom';
import first from '../shared/imgs/image-1.png';
import second from '../shared/imgs/image-2.png';
import third from '../shared/imgs/image-3.png';
import fourth from '../shared/imgs/image-4.png';

const imgs = {
  first,
  second,
  third,
  fourth,
};

const DealPage = () => {
  const deals = useSelector((state: any) => state.deals.value);
  const { id } = useParams();

  return (
    <div
      style={{
        width: '50vw',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {deals.map((deal: any) => {
        if (deal.id === id) {
          return (
            <DealCard
              key={id}
              id={deal.id}
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
        }
      })}
    </div>
  );
};

export default DealPage;
