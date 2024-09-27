import { createListenerMiddleware } from '@reduxjs/toolkit';
import { writeToken } from '../features/slcies/token-slice/tokenSlice';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: writeToken,
  effect: async (action): Promise<any> => {
    const token = action.payload;

    if (token === '' && window.location.pathname !== '/login') {
      window.location.href = '/login';
    }
  },
});

export default listenerMiddleware;
