import { Button ,Input ,Select,DatePicker,Icon} from 'antd';
import React, { Component } from 'react';
import './../../css/Sider/desk.css';
import GouTong from './Chart/GouTong.js';
import Task from './Chart/task.js';
const InputGroup = Input.Group;
const Option = Select.Option;
var Boxs = ['Box1','Box2','Box3','Box1'];
export default class DeskCenter extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      flag1:false,
      flag2:false,
      flag3:false,
      flag4:false,
      iconF:false,
      height:window.screen.height,
    }
  }
    onClick1(){
      this.setState({flag1:!this.state.flag1});
      this.setState({iconF:!this.state.iconF});
      console.log(this.state.iconF)
      console.log(this.state.flag1)
    }
    onClick2(){
      this.setState({flag2:!this.state.flag2});
      this.setState({iconF:!this.state.iconF});
      console.log(this.state.iconF)
      console.log(this.state.flag2)
    }
    onClick3(){
      this.setState({flag3:!this.state.flag3});
      this.setState({iconF:!this.state.iconF});
      console.log(this.state.iconF)
      console.log(this.state.flag3)
    }
    onClick4(){
      this.setState({flag4:!this.state.flag4});
      this.setState({iconF:!this.state.iconF});
      console.log(this.state.iconF)
      console.log(this.state.flag4)
    }
  render() {
    const Box1 = {
      'width':this.state.flag1?'100%':'47%',
      'height':this.state.flag1?this.state.height:'400px',
      'background':'white',
      'float':this.state.flag1?'':'left',
      'marginLeft':this.state.flag1?'':'2%',
      'margin-top':this.state.flag1?'':'20px',
      'position':this.state.flag1?'absolute':'',
      'zIndex':this.state.flag1?'100':'',
      'top':this.state.flag1?'0':''
    }
    const Box2 = {
      'width':this.state.flag2?'100%':'47%',
      'height':this.state.flag2?this.state.height:'400px',
      'background':'white',
      'float':this.state.flag2?'':'left',
      'marginLeft':this.state.flag2?'':'2%',
      'margin-top':this.state.flag2?'':'20px',
      'position':this.state.flag2?'absolute':'',
      'zIndex':this.state.flag2?'100':'',
      'top':this.state.flag2?'0':''
    }
    const Box3 = {
      'width':this.state.flag3?'100%':'47%',
      'height':this.state.flag3?this.state.height:'400px',
      'background':'white',
      'float':this.state.flag3?'':'left',
      'marginLeft':this.state.flag3?'':'2%',
      'margin-top':this.state.flag3?'':'20px',
      'position':this.state.flag3?'absolute':'',
      'zIndex':this.state.flag3?'100':'',
      'top':this.state.flag3?'0':''
    }
    const Box4 = {
      'width':this.state.flag4?'100%':'47%',
      'height':this.state.flag4?this.state.height:'400px',
      'background':'white',
      'float':this.state.flag4?'':'left',
      'marginLeft':this.state.flag4?'':'2%',
      'margin-top':this.state.flag4?'':'20px',
      'position':this.state.flag4?'absolute':'',
      'zIndex':this.state.flag4?'100':'',
      'top':this.state.flag4?'0':''
    }
    const icon = {
      'float':'right',
      'width':'20px',
      'height':'20px',
      'marginTop':'5px',
      'marginRight':'5px',
      'padding':'2.5px',
      'borderRadius':'100%',
      'background':'rgb(182, 194, 201)',
      'color':'white'
    }
    const ic = this.state.iconF?'shrink':'arrows-alt';
    return (
      <div> 
          <div style={Box1}>
              <div className='DeskCenterBoxTOP'>
                  <strong className='DeskCenterTopSpan'>沟通效率</strong>
                  <Icon type={ic} style={icon} onClick={this.onClick1.bind(this)}></Icon>
              </div>
              <div>
                  <InputGroup compact style={{padding:'15px'}}>
                      <Select defaultValue="Option2-1">
                          <Option value="Option2-1">公司</Option>
                          <Option value="Option2-2">个人</Option>
                      </Select>
                  </InputGroup>
                  <GouTong />
              </div>
          </div>
          <div style={Box2}>
              <div className='DeskCenterBoxTOP'>
                  <strong className='DeskCenterTopSpan'>当日任务</strong>
                  <Icon type={ic} style={icon} onClick={this.onClick2.bind(this)}></Icon>
              </div>
              <div>
                  <InputGroup compact style={{padding:'15px'}}>
                      <Select defaultValue="Option2-1">
                          <Option value="Option2-1">公司</Option>
                          <Option value="Option2-2">个人</Option>
                      </Select>
                  </InputGroup>
              </div>
                  <Task />
          </div>
          <div style={Box3}>
              <div className='DeskCenterBoxTOP'>
                  <strong className='DeskCenterTopSpan'>业绩目标</strong>
                  <Icon type={ic} style={icon} onClick={this.onClick3.bind(this)}></Icon>
              </div>
          </div>
          <div style={Box4}>
              <div className='DeskCenterBoxTOP'>
                  <strong className='DeskCenterTopSpan'>业绩排行</strong>
                  <Icon type={ic} style={icon} onClick={this.onClick4.bind(this)}></Icon>
              </div>
          </div>
      </div>
    );
  }
}
