import axios from 'axios';
import updateToken from '../../slcies/token-slice/updateToken';
import { setLoading } from '../../slcies/loading-slice/loading';
import stateStore from '../../../app/store';

const createUserRequest = async (data: {
  email: string;
  name: string;
  password: string;
}): Promise<any> => {
  try {
    stateStore.dispatch(setLoading(true));
    const authToken = await axios.post('http://localhost:3000/users', {
      ...data,
    });

    if (authToken.data.token) {
      updateToken(authToken.data.token);
      return;
    }

    throw new Error(authToken.data);
  } catch (error) {
    // todo error handling logic
  } finally {
    stateStore.dispatch(setLoading(false));
  }
};

export default createUserRequest;
