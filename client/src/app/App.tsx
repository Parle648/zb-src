import { BrowserRouter, Route, Routes } from 'react-router-dom';
// todo lazy loading
import Main from '../pages/Main';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import { Provider } from 'react-redux';
import stateStore from './store';
import Header from '../widgets/Header/Header';
import Loader from '../shared/UI/Loader/Loader';

function App() {
  return (
    <Provider store={stateStore}>
      <BrowserRouter>
        <Header />
        <Loader />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
