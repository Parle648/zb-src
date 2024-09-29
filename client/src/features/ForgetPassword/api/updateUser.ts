import axios from 'axios';
import stateStore from '../../../app/store';
import { writeToken } from '../../slcies/token-slice/tokenSlice';
import { setLoading } from '../../slcies/loading-slice/loading';

const updateUserRequest = async (data: any) => {
  stateStore.dispatch(setLoading(true));
  try {
    const response = await axios.put(
      `http://localhost:3000/users?email=${data.email}`,
      { password: data.password },
    );

    if (response.data.token) {
      stateStore.dispatch(writeToken(response.data.token));
    } else {
      alert(response.data.message);
    }
  } catch (error) {
    console.log(error);
  } finally {
    stateStore.dispatch(setLoading(false));
  }
};

export default updateUserRequest;
