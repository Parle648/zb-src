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
    const response = await axios.get(
      `http://localhost:3000/users?loginData=${JSON.stringify(data)}`,
    );

    if (response.data.token) {
      updateToken(response.data.token);
      return;
    } else {
      alert(response.data.message);
    }
  } catch (error: any) {
    // todo error handling logic

    alert('');
  } finally {
    stateStore.dispatch(setLoading(false));
  }
};

export default authRequest;
