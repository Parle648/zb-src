import stateStore from '../../../app/store';
import { writeToken } from './tokenSlice';

const updateToken = (token: string) => {
  stateStore.dispatch(writeToken(token));
};

export default updateToken;
