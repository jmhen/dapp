import React from 'react'
import { Row,Col,Avatar,Input,Button} from 'antd';
import { history } from 'umi';
import {
    UserOutlined

} from '@ant-design/icons';

const { Search } = Input

export default ()=>{
    return(

        <Row gutter={[0,32]} style={{padding:64, background: "white"}} className="card-style">
            <Col span={24}>
                <div className="centralized-block">
                    <Avatar style={{ backgroundColor: '#48B9FF' }} size={60} icon={<UserOutlined />} />
                </div>
            </Col>
           
            <Col span={24} >
                <Search
                    placeholder="Input election address"
                    enterButton="Enter Election"
                    size="large"
                    onSearch={value => history.push(`/vote?address=${value}`)}
                    />
            </Col>
            <Col span={24} >
                <Button 
                    type="dashed" 
                    size="large" 
                    block={true}
                    onClick={() => history.push('/role')}>
                Home
                </Button>
            </Col>
            

            
        </Row>

    )
}