import React from 'react'
import { Row, Button,Col,Avatar } from 'antd';
import { history } from 'umi';
import {
    UserOutlined

} from '@ant-design/icons';

export default ()=>{
    return(

        <Row gutter={[0,32]} style={{padding:64, background: "white"}} className="card-style">
            <Col span={24}>
                <div className="centralized-block">
                    <Avatar style={{ backgroundColor: '#48B9FF' }} size={60} icon={<UserOutlined />} />
                    <h2>I am</h2>
                </div>
            </Col>
           
            <Col span={8} offset={8}>
                <Button 
                    type="primary" 
                    shape="round" 
                    size="large" 
                    block={true}
                    onClick={() => history.push("/enter/admin")}>
                Admin
                </Button>
            </Col>
            
            <Col span={8} offset={8}>
                <Button 
                    type="primary" 
                    shape="round" 
                    size="large" 
                    block={true}
                    onClick={() => history.push("/enter")}>
                Member
                </Button>
            </Col>
            
        </Row>

    )
}