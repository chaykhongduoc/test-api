import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home(props) {

  return (
    <div>
      <Link className='p-5' to="/weather">Weather</Link>
      <Link className='p-5' to="/product">Product</Link>
      <Link className='p-5' to="/login">Login</Link>
    </div>
  );
}

export default Home;