import React, { useState } from 'react';
import axios from '../../api/axios';
import './Login.css';
import { authAdminAction, authAdminLoadingAction } from '../../redux-actions/authAdminAction';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, Redirect } from 'react-router';
import Loader from '../../components/loader/Loader';

const Login = () => {
  const authLogin = useSelector(state => state.authLogin)
  const history = useHistory();
  const location = useLocation();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const authenticateTheAdmin = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    dispatch(authAdminLoadingAction())
    await axios.post("admins/auth", {
      login,
      password
    }
    ).then(admin => {
      console.log(admin)
      dispatch(authAdminAction(admin.data))
      setIsLoading(false)
      history.push("/user")
    })
     .catch(err => {
       console.log(err)
       setIsLoading(false)
      })
  }
  return authLogin.admin ?  <Redirect
  to={{
    pathname: "/user",
    state: {
      from: location.pathname,
    },
  }}
/> : <div className='login'>
    <div className="login_container">
      <h1>Tizimga kirish</h1>
    <form onSubmit={authenticateTheAdmin}>
        <input className='login_digest' type="text" placeholder='Your Login' value={login} onChange={(e) => setLogin(e.target.value)} />
        <input className='password_digest' type="password" placeholder='Your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className='data_submitter' type='submit'>{isLoading ? <Loader/> : "Tizimga kirish"}</button>
      </form>
    </div>
  </div>;
};

export default Login;
