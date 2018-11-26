import { Button ,Input ,Select} from 'antd';
import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
export default class Login extends React.Component {
      constructor(props) {
        super(props);
        this.state = ({
        Login:this.props.fdz,
      })
    } 
      To_Main(name){
        var names = {url:"ysc"};
        this.props.history.push({
          pathname:"/Main",
          query:{
            name:names,
          }
        })
      }
      yanzheng(){
        let username = document.getElementById("name").value;
        let password = document.getElementById("pass").value;
        console.log(username)
        if (username == 'ysc'&&password == 123456) {
          document.getElementById('tomain').click();
        }else{
          alert('账号密码错误')
        }
      }
      clickFun(text) {
        var textNew = !text;
        this.setState({
            Login: textNew 
        },() =>{
           console.log(this.state.Login);
        });
        this.props.zdf(false)//这个地方把值传递给了props的事件当中
        document.getElementById('Box').style.display  = 'none';
      }
      componentDidUpdate (){
         console.log(this.props.fdz)
        if (this.props.fdz) {
          document.getElementById('Box').style.display  = 'block';
        }
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
      <div id='Box' style={{width:500,height:400,opacity:0.8,marginLeft:leftW,marginTop:leftH,'position':'absolute',overflow:'hidden'}}>
          <div style={{width:'100%',height:50}}>
              <div style={logo}></div>
              <strong style={{float:'left',fontSize:'28px'}}>集创CRM</strong>
          </div>
          <div style={{width:'100%',height:350,backgroundColor:"rgb(51, 51, 51)",marginTop:10,'borderRadius':'5px'}}>
              <Input id="name" style={{width:300,height:50,left:100,marginTop:50}}  placeholder="请输入账号"  />
              <Input id="pass" style={{width:300,height:50,'marginTop':20,left:100}} placeholder="请输入密码"  />
              <div style={{width:300,height:30,marginLeft:100,marginTop:15}}>
                  <input type="checkbox" style={{marginTop:5,'position':"absolute"}} /><span style={{marginLeft:15,marginTop:-5,color:'white'}}>记住我</span><span style={{float:'right',marginTop:5,color:'white'}} onClick={this.clickFun.bind(this,this.state.Login)} >没有账号？</span>
              </div>
              <Button style={{width:300,height:40,marginTop:15,left:100,backgroundColor:'rgb(0, 138, 138)',border:'none'}} onClick={this.yanzheng}><span style={{color:'white','fontSize':20}}>登陆</span></Button>
              <Link id='tomain' to={{pathname:'/Main',query:{name: 'ysc'}}} hidden>登陆</Link>
          </div>
      </div>
    );
  }
}
