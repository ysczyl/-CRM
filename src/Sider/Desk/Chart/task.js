import { Button ,Input ,Select,DatePicker,Icon} from 'antd';
import React, { Component } from 'react';
import './../../../css/Sider/desk.css';
var TaskNub = [1,1,1,1,1];
export default class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const checkBox = {
        '-ms-transform': 'scale(2)', /* IE */
        '-moz-transform': 'scale(2)',/* FireFox */
        '-webkit-transform': 'scale(2)', /* Safari and Chrome */
        '-o-transform': 'scale(2)', /* Opera */
        width:'100%'
    }
    let tr = TaskNub.map((item,index)=>
            <tr key={index} style={{width:'100%',height:'40px'}}>
              <td style={{width:'5%'}}> <input type="checkbox" style={checkBox} /></td>
              <td style={{width:'25%','textAlign':'center'}}>time</td>
              <td style={{width:'54%','textAlign':'center'}}>center</td>
            </tr>);
    return (
      <div>
          <div style={{padding:'20px'}}>
              <strong className='taskSpan'>当日任务剩余{TaskNub.length}个</strong>
              <a className='taskSpan' style={{float:'right'}}>创建任务</a>
              <DatePicker className='DatePicker' />
          </div>
          <table border="1" style={{width:'94%',marginLeft:'3%'}}>
              {tr}
          </table>
      </div>
    );
  }
}
