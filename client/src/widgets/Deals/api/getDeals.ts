import axios from 'axios';
import stateStore from '../../../app/store';
import { setDeals } from '../../../features/slcies/deals/deals-slice';
import { setLoading } from '../../../features/slcies/loading-slice/loading';

const getDeals = async (token: string) => {
  try {
    stateStore.dispatch(setLoading(true));
    const dealsData = await axios(`http://localhost:3000/deals?token=${token}`);

    stateStore.dispatch(setDeals(dealsData.data));
  } catch (error) {
    // todo error handling
  } finally {
    stateStore.dispatch(setLoading(false));
  }
};

export default getDeals;
