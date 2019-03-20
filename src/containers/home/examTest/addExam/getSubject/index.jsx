/*
 * @Author: mikey.liujiaxu 
 * @Date: 2019-03-14 14:35:47 
 * @Last Modified by:   mikey.liujiaxu 
 * @Last Modified time: 2019-03-14 14:35:47 
 */
import React, { Component } from 'react'
import { Select } from 'element-react';
import 'element-theme-default';
export default class Type extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    render() {
        const { subjectsList } = this.props
        return (
            <div>
                <p>选择课程类型：</p>
                <Select value={this.state.value} clearable={true} onChange={(e) => {
                    subjectsList.filter(el => {
                        if (e === el.subject_text) {
                            this.props.val({ subject: el.subject_id })
                        }
                        return el.subject_text
                    })
                }}>
                    {
                        subjectsList.map(el => {
                            return <Select.Option key={el.subject_id} label={el.subject_text} value={el.subject_text} />
                        })
                    }
                </Select>
            </div>
        )
    }
}
