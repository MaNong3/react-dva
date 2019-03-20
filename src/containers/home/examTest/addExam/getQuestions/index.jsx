/*
 * @Author: mikey.liujiaxu 
 * @Date: 2019-03-14 11:49:05 
 * @Last Modified by: songmingjie
 * @Last Modified time: 2019-03-16 14:47:24
 */
import React, { Component } from 'react'
import { Select } from 'element-react';
import 'element-theme-default';
export default class Type extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
  render() {
      const {questionTypesList}=this.props
     // console.log(questionTypesList)
    return (
       <div>
          <p>选择题目类型：</p>
                    <Select value={this.state.value} clearable={true} onChange={(e)=>{
                     questionTypesList.filter(el=>{
                             if(e===el.questions_type_text){
                                   this.props.val({type:el.questions_type_id})
                                 }
                                return el.questions_type_text
                             })
                        
                     }}>
                         {
                            questionTypesList.map(el => {
                                 return <Select.Option key={el.questions_type_id} label={el.questions_type_text} value={el.questions_type_text} />
                             })
                         }
                     </Select>
       </div>
    )
  }
}
