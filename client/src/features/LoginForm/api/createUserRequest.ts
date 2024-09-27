import axios from 'axios';
import updateToken from '../../slcies/token-slice/updateToken';
import stateStore from '../../../app/store';
import { setLoading } from '../../slcies/loading-slice/loading';

const authRequest = async (data: {
  email: string;
  password: string;
}): Promise<any> => {
  try {
    stateStore.dispatch(setLoading(true));
    const authToken = await axios.get(
      `http://localhost:3000/users?loginData=${JSON.stringify(data)}`,
    );

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

export default authRequest;
