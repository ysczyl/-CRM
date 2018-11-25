import React, { Component } from 'react';
import logo from './logo.svg';
import Img from 'react-image';
import 'antd/dist/antd.css';
import './App.css';
import './css/Box/Box.css';
import Login from './Login/Login.js';
import Register from './Login/register.js';
var imgs = ['http://193.112.92.136/imgs/CRM/bg-1.jpg','http://193.112.92.136/imgs/CRM/bg-2.jpg','http://193.112.92.136/imgs/CRM/bg-3.jpg','http://193.112.92.136/imgs/CRM/bg-4.jpg','http://193.112.92.136/imgs/CRM/bg-5.jpg','http://193.112.92.136/imgs/CRM/bg-6.jpg'];
var BG = "http://193.112.92.136/imgs/CRM/bg-1.jpg"
var Loginss = 'Login'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
          bg:"http://193.112.92.136/imgs/CRM/bg-1.jpg",
          Login:true,
    };
    }
    change(ysc){
      this.setState({bg:ysc})
      console.log(this.state.bg)
      console.log(this.state.Login)
    }
    onChangeState(stateName){
        this.setState(stateName)
    }
    fn(data) {
        // console.log("父组件收到")
        // console.log(data)
        this.setState({
            Login: data //把父组件中的parentText替换为子组件传递的值
        },() =>{
           console.log(this.state.Login);//setState是异步操作，但是我们可以在它的回调函数里面进行操作
        });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
          Login: nextProps.Login > this.props.Login
        });
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
    const bg = imgs.map((item,index)=>
                <Img src={item} key={index} style={{width:120,height:100,'backgroundRepeat': 'noRepeat','backgroundSize': 'cover','float':'Right','marginTop':heightImgs}}
                      onClick={this.change.bind(this,item)}
                >

                </Img>
            );
    
    return (
      <div>
      <div style={bgStyle}>
      {bg}
      <Register zdf={this.fn.bind(this)} fdz={this.state.Login} />
      <Login fdz={this.state.Login} zdf={this.fn.bind(this)} />
      </div>
      
      </div>
    );
  }
}

export default App;
