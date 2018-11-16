import { Button  } from 'antd';
import React, { Component } from 'react';
import './../../css/Sider/desk.css';
export default class NumberAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height:false,
    };
  }
  animate(){
    this.setState({height:!this.state.height});
    console.log(this.state.height)
  }
  render() {
  	const animate = {
  		'animation':this.state.height?'MoveBefore 1s linear':'MoveAfter 1s linear',
      height:this.state.height?'500px':'30px',
  		'animation-fill-mode':'forwards',
  		'animation-iteration-count':'1',
  	}
    return (
      <div className='animateBox' style={animate}>
        <Button className='animateButton' onClick={this.animate.bind(this)}></Button>
      </div>
    );
  }
}
