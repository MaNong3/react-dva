import React, { Component } from 'react'
import { connect } from 'dva';
import {  Button,message, List, Typography } from 'antd';
import './css/index.css'
import Select from '@/components/select/select'
import {getTestType} from '@/services/exam'


  const mapState = store => {
    return { ...store.exam }
}
@connect(mapState)
 class TestList extends Component {
    state = {
        questions_type_id: '',
        subject_id: '',
        exam_id: '',
        questions_id:'',
        lists:[]
       
    }
     componentDidMount() {
        this.props.dispatch({ type: 'exam/getSubjectList' });
        this.props.dispatch({ type: 'exam/getExamTypeList' });
        this.props.dispatch({ type: 'exam/getQuestionsTypeList' });
        this.props.dispatch({ type: 'exam/getAllTestList' });
       // this.props.dispatch({ type: 'exam/getTestTypeList' });
    }
    setValue = (type,item)=>{
        this.setState(()=>({
            [type]:item
        }))
    };
    forbtn = () =>{
        const {
            exam_id, 
            questions_type_id,
            subject_id,
            questions_id
        } = this.state
       console.log(this.state)

       getTestType({
        exam_id, 
        questions_type_id,
        subject_id,
        questions_id
       }).then(res=>{
           console.log(res)
           if(res.data.code===1){
            message.success('获取成功')
            let data=res.data.data;
            let newData=data.filter(el=>{return el.questions_id===questions_id})
            this.setState({
                lists:newData
            })
           }else{
               message.error('参数不对')
           }
       })
    }
   
    render() {
        const { questionTypesList, examTypesList, subjectsList ,getAllTestList} = this.props
       const {lists}=this.state

        return (
            <div className="test">
                <h1>考试管理/试题分类</h1>
               
                <div className="select">
                         <Select text="请选择考试类型：" id="exam_id" name="exam_name" source={examTypesList} setValue={this.setValue} ></Select>                
                        <Select text="请选择课程类型：" id="subject_id" name="subject_text" source={subjectsList} setValue={this.setValue}></Select>
                        <Select text="请选择题目类型：" id="questions_type_id" name="questions_type_text" source={questionTypesList} setValue={this.setValue}></Select>
                        <Select text="请选择所有试题类型：" id="questions_id" name="questions_stem" source={getAllTestList} setValue={this.setValue}></Select>
                </div>
                <Button type="primary" onClick={this.forbtn}>提交</Button>
                <div className="lists">
                    <List
                        bordered
                        dataSource={lists}
                        renderItem={item => (
                        <List.Item>
                                {/* <Typography.Text mark>[考试类型]</Typography.Text>
                                {item.exam_name}
                                <Typography.Text mark>[课程类型]</Typography.Text>
                                {item.subject_text}
                                <Typography.Text mark>[题目类型]</Typography.Text>
                                {item.questions_type_text} */}
                                <p>
                                    <Typography.Text mark>[考试问题]</Typography.Text>
                                    {item.questions_stem}
                                </p>
                                <Typography.Text mark>[考试答案]</Typography.Text>
                                {item.questions_answer}
                        </List.Item>
                        )}
                        />
                </div>
            </div>
        )
    }
}

export default connect()(TestList)