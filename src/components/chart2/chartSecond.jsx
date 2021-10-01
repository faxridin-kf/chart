import React, { Component } from 'react';
import './chartSecound.css'
import Diogram from '../mainBoard/diogram'
import Example from '../mainBoard/mainBoard'
import Radio from '../mainBoard/radio';
class ChartBlock extends React.Component {
  render() { 
    return (
      <React.Fragment>
        <div class="chart2">
            <div class="mainFlex">
                <div class="bigCard">
                <p className="small">Подрядчик</p>
                <p className="titleText">DESCOVER INVEST</p>
                </div>
                <div class="miniCard">
                    <div class="card1">
                      <p className="title">Всего дней</p>
                      <p className="span">23 дней</p>
                    </div>
                    <div class="card2">
                    <p className="title">Общее кол-во</p>
                      <p className="span">222</p>
                    </div>
                </div>
                <div class="miniCard">
                    <div class="card3">
                    <p className="title">Дефакты</p>
                      <p className="span">12</p>
                    </div>
                    <div class="card4">
                    <p className="title">Спец заказы</p>
                      <p className="span">120</p>
                    </div>
                </div>
            </div>
            <div class="chartBlock">
                <div class="chartFlexbox">
                  <Example/>
                    <Diogram/>
                    <Radio/>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default ChartBlock;