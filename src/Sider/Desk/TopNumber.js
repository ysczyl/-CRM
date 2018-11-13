import { Button  } from 'antd';
import React, { Component } from 'react';
import './../../css/Sider/desk.css';
export default class TopNumber extends React.Component {
  render() {
    return (
      <div>
        <Button className='topBtn1' type="primary"><span className='BtnSpan'>当前客户总数<br />0</span></Button>
        <Button className='topBtn2' type="primary"><span className='BtnSpan'>今日新客户数<br />0</span></Button>
        <Button className='topBtn3' type="primary"><span className='BtnSpan'>今日有效新客户<br />0</span></Button>
        <Button className='topBtn4' type="primary"><span className='BtnSpan'>今日通话新客户<br />0</span></Button>
        <Button className='topBtn5' type="primary"><span className='BtnSpan'>今日放弃客户<br />0</span></Button>
        <Button className='topBtn6' type="primary"><span className='BtnSpan'>昨日回库客户<br />0</span></Button>
      </div>
    );
  }
}
