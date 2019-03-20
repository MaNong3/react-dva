/*
 * @Author: mikey.liujiaxu 
 * @Date: 2019-03-14 11:49:02 
 * @Last Modified by: mikey.liujiaxu
 * @Last Modified time: 2019-03-14 14:30:23
 */
import React, { Component } from 'react'
import { Select } from 'element-react';
import 'element-theme-default';
export default class TestType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    render() {
        const {examTypesList}=this.props
       
        return (
            <div>
                <p>选择考试类型：</p>
                <Select value={this.state.value} clearable={true} onChange={(e) => {
                   examTypesList.filter(el => {
                        if (e === el.exam_name) {
                            this.props.val({ test: el.exam_id })
                        }
                        return el.exam_name
                    })
                }}>
                    {
                       examTypesList.map(el => {
                            return <Select.Option key={el.exam_id} label={el.exam_name} value={el.exam_name} />
                        })
                    }
                </Select>
            </div>
        )
    }
}
