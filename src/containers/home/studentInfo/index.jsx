import React, { Component } from 'react'
import {studentInfo} from "services/students"
console.log(studentInfo)
export class index extends Component {
    componentDidMount(){
        studentInfo().then(res=>{
            console.log(res)
        })
    }
  render() {
    return (
      <div>
        11111
      </div>
    )
  }
}

export default index
