/*
 * @Author: mikey.liujiaxu 
 * @Date: 2019-03-17 19:46:59 
 * @Last Modified by:   mikey.liujiaxu 
 * @Last Modified time: 2019-03-17 19:46:59 
 */

import React, { Component } from 'react'
import { connect } from 'dva';
import 'element-theme-default';
import { Input, Button } from 'element-react';
import "./index.css"
import { questions } from '@/services/exam'
import { message } from 'antd'
import '../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';


import GetQuestions from './getQuestions';
import GetSubject from './getSubject'
import GetExam from './getExam'
const mapState = store => {
    return { ...store.exam }
}
@connect(mapState)
class TestList extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'exam/getSubjectList' });
        this.props.dispatch({ type: 'exam/getExamTypeList' });
        this.props.dispatch({ type: 'exam/getQuestionsTypeList' });
    }
    constructor(props) {
        super(props)
        this.state = {
            questions_type_id: '',
            questions_stem: '',
            subject_id: '',
            exam_id: '',
            user_id: '',
            questions_answer: '',
            editorState: EditorState.createEmpty(),
            one: EditorState.createEmpty(),
        }
       
        this.vals = this.vals.bind(this)
        this.submit = this.submit.bind(this)
    }
    success() {
        message.success('添加成功！', 3);
    };
    submit() {
        const { editorState ,one} = this.state;
        let stem=draftToHtml(convertToRaw(one.getCurrentContent()));
        let answer=draftToHtml(convertToRaw(editorState.getCurrentContent()))
        let userId = sessionStorage.getItem('userId')
        const { questions_type_id, questions_stem, subject_id, exam_id, questions_answer } = this.state;
        
        questions({
            title:"11",
            user_id:userId,
            questions_type_id,
            questions_stem:stem,
            subject_id,
            exam_id,
            questions_answer:answer
        }).then(res => {
            if (res.data.code === 1) {
                this.success()
            }
        })
    }
    vals(data) {
        if (data.type) {
            this.setState({
                questions_type_id: data.type
            })
        } else if (data.test) {
            this.setState({
                exam_id: data.test
            })
        } else {
            this.setState({
                subject_id: data.subject
            })
        }

    }
    onEditorStateChange(editorState) {
        this.setState({ editorState })
    }
    onEditorState(one) {
        this.setState({ one })
    }
    render() {
        const { questionTypesList, examTypesList, subjectsList } = this.props
        return (
            <div className="test">
                <div className="bot">
                    <h2>题干:</h2>
                    <Editor
                    one={this.state.one}
                    // wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={::this.onEditorState}
                    />
                    
                    <h2>答案:</h2>
                    <Editor
                    editorState={this.state.editorState}
                    // wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={::this.onEditorStateChange}
                    />
                    <div className="components"> 
                        <GetQuestions
                            val={this.vals}
                            type={'type'}
                            questionTypesList={questionTypesList} />
                        <GetExam
                            val={this.vals}
                            type={'test'}
                            examTypesList={examTypesList} />
                        <GetSubject
                            val={this.vals}
                            type={'class'}
                            subjectsList={subjectsList} />
                    </div>
                        
                    <Button type="primary" onClick={this.submit} id="btn">提交</Button>
                </div>

            </div>
        )
    }
}

export default TestList;