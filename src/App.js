import './App.scss';
import Header from './components/Header';

import  Container from "react-bootstrap/Container";
import { ToastContainer } from 'react-toastify';

import { useContext, useEffect } from 'react';
import { UsersContext } from './context/UserContext';
import AppRoutes from './routes/AppRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { handleRefresh } from './redux/actions/userAction';


function App() {
  const dataUserRedux = useSelector(state => state.user.account);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(localStorage.getItem("token")){
      
      dispatch(handleRefresh());
    }
  },[])

  return (
  <>
   <div className='app-container'>

      <Header/>
      <Container>
        <AppRoutes/>
      </Container>
      
   </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
   </>
  );
}

export default App;
