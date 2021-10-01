import React, { Component } from 'react';
import FirstPage from '../firstPage/firstpage';
import Header from '../header/header';
import SideBar from '../sidebar/sideBar';
import './main.css';
// import Example from './components/mainBoard/mainBoard';
import Example from '../mainBoard/mainBoard'
import ChartBlock from '../chart2/chartSecond';


class Main extends React.Component {
  render() { 
    return (
      <React.Fragment>
        <div className="gridBox">
         <SideBar/>
          <div className="content">
            <Header/>
            <div className="container">
              <FirstPage/>
              <div class="chartBlock">
            <div class="chartFlexbox">
                <Example/>
                <Example/>
                <Example/>
            </div>
        </div>
            <div class="searchBlock">
            <h1 class="title">Список подрядчиков</h1>
            {/* <input type="text" placeholder="Поиск подрядчиков"> */}
            <input type="text" placeholder='Поиск подрядчиков' className='input'/>
        </div>
        <ChartBlock/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
 
export default Main;