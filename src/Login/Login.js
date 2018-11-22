import { Button ,Input ,Select} from 'antd';
import React, { Component } from 'react';
export default class Login extends React.Component {
  render() {
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
      <div style={{width:500,height:400,backgroundColor:'cyan',opacity:0.8}}>
          <div style={{width:'100%',height:50}}>
              <div style={logo}></div>
              <strong style={{float:'left',fontSize:'28px'}}>集创CRM</strong>
          </div>
          <div style={{width:'100%',height:350,backgroundColor:"rgb(153, 153, 153)",marginTop:10}}>
              <Input style={{width:300,height:50,left:100,marginTop:10}} />
              <Input style={{width:300,height:50,'marginTop':20,left:100}} />
              <Button style={{width:300,height:40,marginTop:50,left:100,backgroundColor:'rgb(0, 138, 138)'}}><span style={{color:'white'}}>登陆</span></Button>
          </div>
      </div>
    );
  }
}
