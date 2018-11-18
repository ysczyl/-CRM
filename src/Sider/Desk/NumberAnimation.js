import { Button ,Input ,Select} from 'antd';
import React, { Component } from 'react';
import './../../css/Sider/desk.css';
const InputGroup = Input.Group;
const Option = Select.Option;
var trs = ['ysc','zyl',1,1,1,1,1];
export default class NumberAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height:false,
      flag:false,
    };
  }
  animate(){  
    this.setState({height:!this.state.height});
    console.log(this.state.height)
  }
  BoxStart(){
    this.setState({flag:true});
    console.log(this.state.flag)
  }
  render() {
  	const animate = {
  		'animation':this.state.height?'MoveBefore 1s linear':'MoveAfter 1s linear',
      height:this.state.height?'500px':'40px',
  		'animation-fill-mode':'forwards',
  		'animation-iteration-count':'1',
  	}
    let tr = trs.map((item,index)=>
            <tr key={index}>
              <td>number</td>
              <td>number</td>
              <td>number</td>
              <td>number</td>
              <td>number</td>
              <td>number</td>
              <td>number</td>
            </tr>);
    return (
      <div className='animateBox' style={animate}>
        <div className='animateTop'>
        <strong className='topSpan'>客户数据监控详情</strong>
        <Button className='animateButton' onClick={this.animate.bind(this)}></Button>
        </div>
        <div className='animateCenter'>
            <strong style={{fontSize:20,padding:'15px',float:'left'}}>查看范围:</strong>
            <InputGroup compact style={{padding:'15px'}}>
              <Select defaultValue="Option2-1">
              <Option value="Option2-1">公司</Option>
              <Option value="Option2-2">Option2-2</Option>
              </Select>
            </InputGroup>
              <table border="1" className='table'>
              <tr className='tableTR' style={{height:50}}>
              <td>客户经理</td>
              <td>当前客户总数</td>
              <td>今日新客户</td>
              <td>今日有效新客户</td>
              <td>今日通话新客户</td>
              <td>今日放弃客户</td>
              <td>昨日回库客户</td>
              </tr>
              {tr}
            </table>
        </div>
      </div>
    );
  }
}
