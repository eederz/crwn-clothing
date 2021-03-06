import React from 'react';

import '../header/header.component.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/original.svg';

import { auth } from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (
  <div className ='header'>

    <Link className='logo-container' to='/'>
      <Logo className='logo'></Logo>
    </Link>

    <div className ='options'>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/shop'>CONTACT</Link>
      {
        currentUser ?
        <div className = 'options' onClick ={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className = 'option' to ='/signin'>SIGN IN</Link>
      }
    </div>

  </div>
);

export default Header;
