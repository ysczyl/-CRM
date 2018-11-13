import { Button  } from 'antd';
import React, { Component } from 'react';
import './../css/Sider/desk.css';
import TopNumber from './Desk/TopNumber.js';
import NumberAnimation from './Desk/NumberAnimation.js';
export default class Desk extends React.Component {
  render() {
    return (
      <div>
        <TopNumber />
        <NumberAnimation />
      </div>
    );
  }
}
