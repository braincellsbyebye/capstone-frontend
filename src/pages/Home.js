import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const history = useNavigate();
  function logout()
  {
    localStorage.clear();
    history("/login")
  }

  return (
    <div>
      <h5>admin</h5>
      <h6>admin@gmail.com</h6>
      <button onClick={logout} >Log Out</button>
    </div>
  );
};

export default Home;
