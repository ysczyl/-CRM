import React, { Component } from 'react';
import logo from './logo.svg';
import Img from 'react-image';
import 'antd/dist/antd.css';
import './App.css';
import './css/Box/Box.css';
import Login from './Login/Login.js';
var imgs = ['http://193.112.92.136/imgs/CRM/bg-1.jpg','http://193.112.92.136/imgs/CRM/bg-2.jpg','http://193.112.92.136/imgs/CRM/bg-3.jpg','http://193.112.92.136/imgs/CRM/bg-4.jpg','http://193.112.92.136/imgs/CRM/bg-5.jpg','http://193.112.92.136/imgs/CRM/bg-6.jpg'];
var BG = "http://193.112.92.136/imgs/CRM/bg-1.jpg"
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
          bg:"http://193.112.92.136/imgs/CRM/bg-1.jpg",
    };
    }
    change(ysc){
      this.setState({bg:ysc})
      console.log(this.state.bg)
    }
  render() {
    const heightAll = window.innerHeight;
    const heightImgs = heightAll-150;
    const bgStyle = {
      width:'100%',
      height:heightAll,
      'backgroundImage':"url(" + this.state.bg + ")",
      'backgroundRepeat': 'noRepeat',
      'backgroundSize': 'cover'
    }
    const Fro = {

    }
    const bg = imgs.map((item,index)=>
                <Img src={item} key={index} style={{width:120,height:100,'backgroundRepeat': 'noRepeat','backgroundSize': 'cover','float':'Right','marginTop':heightImgs}}
                      onClick={this.change.bind(this,item)}
                >

                </Img>
            );
    
    return (
      <div>
      <div style={bgStyle}>
      <Login />
      {bg}
      </div>
      
      </div>
    );
  }
}

export default App;
