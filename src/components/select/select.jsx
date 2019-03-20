
import { Select } from 'antd';
import React from 'react'
const Option = Select.Option;
const SelectStyle = { width: 120, marginRight: 10 }

const SelectText = (props) => {
    const { source, text, id, name, setValue } = props
    return (
        <div className='selects'>
            {text}
            <Select style={SelectStyle} onChange={(value) => { setValue(id, value) }} defaultValue="请选择">
                {
                    source.length && source.map((ele) => {
                        return <Option key={ele[id]} value={ele[id]} label={ele[name]}>{ele[name]}</Option>
                    })
                }
            </Select>
        </div>
    )
}

export default SelectText