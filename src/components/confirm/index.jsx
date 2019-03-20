import { Modal, Button } from 'antd';
import React, { Component } from 'react'

const confirm = Modal.confirm;

export default class Confirm extends Component {
      showDeleteConfirm() {
        confirm({
          title: '你确定要退出么?',
          content: '奴家很伤心呐！',
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk() {
            sessionStorage.clear()
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }

  render() {
    return (
            <Button onClick={()=>{
                this.showDeleteConfirm()
            }} type="dashed">
            退出
            </Button>
           
    )
  }
}
