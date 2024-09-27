import { configureStore } from '@reduxjs/toolkit';
import token, { writeToken } from '../features/slcies/token-slice/tokenSlice';
import loading from '../features/slcies/loading-slice/loading';
import listenerMiddleware from './storeMiddlewares';
import dealsSlice from '../features/slcies/deals/deals-slice';

const stateStore = configureStore({
  reducer: {
    token: token,
    loading: loading,
    deals: dealsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listenerMiddleware.middleware),
});

stateStore.dispatch(writeToken(''));

export default stateStore;
