import React, { Component } from 'react';
// import Dropdown from '../drobdown/dropdown'
import './firstPage.css'
class FirstPage extends React.Component {
  render() { 
    return (
      <React.Fragment>
            <div class="fillter">
            <h1 class="title">Обзор</h1>
            <div class="fillterFlex">
                <p class="text">Фильтр:</p> 
                <p class="list">По группам</p>
                {/* <Dropdown/> */}
                <p class="list">За период</p>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default FirstPage;