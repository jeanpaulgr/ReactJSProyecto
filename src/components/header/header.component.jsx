import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

export default class Header extends React.Component{
  constructor({currentUser}) {
    console.log('currentUser', currentUser);
    super();
    this.state ={
      currentUser: currentUser
    }
  }
    render() {
      return (
    <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className="logo" />
    </Link>
    <div className='options'>
      <Link class="option" to='/points'>
        Points
      </Link>
      <Link  class="option" to='/Friends'>
        Friends
      </Link>
      {localStorage.getItem('loginUser') ? (
       <Link class="option" to='/signin'>
          SIGN OUT
        </Link>
        ) : (
        <Link class="option" to='/signin'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
      
  )}
}



