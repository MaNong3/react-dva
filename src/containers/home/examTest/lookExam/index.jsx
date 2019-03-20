import React, { Component } from 'react'
import { connect } from 'dva';
import "./index.css"
import { Table,message,Modal, Button} from 'antd';

const { Column} = Table;
const mapState = store => {
    return { ...store.exam }
}
@connect(mapState)


class TestList extends Component {
  state={
    visible: false
  }
    success(msg){
        message.success(msg, 3);
      };
     callback(key) {
        console.log(key);
      }
    componentDidMount(){
     
        this.props.dispatch({ type: 'exam/getQuestionsTypeList' });
    }
    showModal = () => {
      this.setState({
        visible: true,
      });
    }
  
    handleOk = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
  
    handleCancel = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
    render() {
        const {questionTypesList}=this.props;
        //console.log(getAllTestList)
        return (
            <div>
                <h1>考试管理/试题分类</h1>
                <div>
                    <Button type="primary" onClick={this.showModal}>
                    添加分类
                    </Button>
                    <Modal
                    title="创建新类型"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <input type="text" placeholder='输入创建类型' className="createType"></input>
                    </Modal>
                </div>
                <Table dataSource={questionTypesList} rowKey="questions_type_id">
                       
                       <Column
                         title="类型ID"
                         dataIndex="questions_type_id"
                         key="questions_type_id"
                       />
                       <Column
                         title="类型名称"
                         dataIndex="questions_type_text"
                         key="questions_type_text"
                       />
                        <Column
                         title="操作"
                         dataIndex=""
                         key=""
                       />
                 </Table>
            </div>
        )
    }
}

export default connect()(TestList)