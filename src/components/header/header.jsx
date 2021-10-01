import React, { Component } from 'react';
import Bell from '../img/bell.svg'
import Avatar from '../img/user.svg'
import './header.css'
class Header extends React.Component {
  render() { 
    return (
      <React.Fragment>
            <div class="HeaderFlexbox">
        <div class="container">
            <div class="profileBlock">
               <img src={Bell} alt="" className="bell" />
                <p class="name"><img src={Avatar} alt="" className="avatar" /> name profile</p>
            </div>
        </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Header;