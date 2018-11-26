import { Button ,Input ,Select} from 'antd';
import React, { Component } from 'react';
export default class Register extends React.Component {
    constructor(props){
      super(props)
      this.state = ({
        Login:this.props.fdz,
      })
    }
    ischeckemail(){
    let email = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let password1 = document.getElementById("password1").value;
    if(password != password1){
      alert("两次密码不一致")
    }
    else{
      console.log("yes")
    }
    }
    clickFun(text) {
        this.setState({
            Login: true 
        },() =>{
           console.log(this.state.Login);
        });
        var textNew = !text;
        this.props.zdf(true)
        document.getElementById('Box2').style.display  = 'none';
        
    }
    componentDidUpdate (){
      console.log(this.props.fdz)
        if (!this.props.fdz) {
          document.getElementById('Box2').style.display  = 'block';
        }
    }
    componentDidMount(){
    }
  render() {
          const WidthAll = window.innerWidth;
          const HeightAll = window.innerHeight;
          const leftW = (WidthAll - 500)/2;
          const leftH = (HeightAll - 400)/4;
          const logo = {
              'backgroundImage':'url("http://193.112.92.136/imgs/react.jpg")',
              'backgroundRepeat': 'noRepeat',
              'backgroundSize': 'cover',
              width:60,
              height:50,
              marginLeft:100,
              float:'left'
          }
    return (
      <div id="Box2" style={{width:500,height:400,marginLeft:leftW,marginTop:leftH,'position':'absolute',opacity:0.8,overflow:'hidden',display:'none'}}>
          <div style={{width:'100%',height:50}}>
              <div style={logo}></div>
              <strong style={{float:'left',fontSize:'28px','textAlign':'center',marginLeft:35}}>注册集创CRM</strong>
          </div>
          <div style={{width:'100%',height:350,backgroundColor:"rgb(51, 51, 51)",marginTop:10,'borderRadius':'5px'}}>
              <Input id="username" style={{width:300,height:50,left:100,marginTop:30}}  placeholder="请输入注册邮箱"   />
              <Input id="password" style={{width:300,height:50,'marginTop':20,left:100}} placeholder="请输入密码"  />
              <Input id="password1" style={{width:300,height:50,'marginTop':20,left:100}} placeholder="请再次输入密码" />
              <div style={{width:300,height:30,marginLeft:100,marginTop:15}}>
                  <input type="checkbox" style={{marginTop:5,'position':"absolute"}} /><span style={{marginLeft:15,marginTop:-5,color:'white'}}>我同意相关条款</span><span style={{float:'right',marginTop:5,color:'white'}} onClick={this.clickFun.bind(this,this.state.Login)} >去登陆</span>
              </div>
              <Button style={{width:300,height:40,marginTop:15,left:100,backgroundColor:'rgb(0, 138, 138)',border:'none'}} onClick={this.ischeckemail} ><span style={{color:'white','fontSize':20}}>注册</span></Button>
          </div>
      </div>
    );
  }
}
