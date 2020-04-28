import React from 'react'
import { Row,Col,Avatar,Input,List,Button,Divider,Table} from 'antd';
import { history, connect } from 'umi';
import {
    UserOutlined

} from '@ant-design/icons';


const ResultBoard = ({
    role,
    deadline,
    name,
    account,
    memberList,
    results,
    vote,
    totalVoted})=>{
    const columns = [

        {
            title: '',
            dataIndex: 'rank',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Votes',
            dataIndex: 'votes',
        },
        ];
    return(
        <Row gutter={[0,32]} style={{padding:64, background: "white"}} className="card-style">
            {name==null?'You have no access to this election':
            <Col span={24}>
                <div className="centralized-block">
                    <h1> Role: {role}</h1>
                    <h4> Deadline: {(new Date(deadline * 1000)).toLocaleString()}</h4>
                    <Divider/>
                    <h4>I am {name}: {account} </h4>
                </div>
            </Col>}  
     
            <Col span={24} >
                <Table 
                dataSource={results} 
                columns={columns} 
                rowKey="name"
                pagination={{ pageSize: 10 }} 
                scroll={{ x: true,y: 300 }}
                />
            </Col>
            <Col span={24}>
                <div className="centralized-block">
                    {/* <h4>My Vote: {vote==null?"You Have Not Voted.":memberList[vote]} </h4> */}
                    <h4>Total Voted: {totalVoted}</h4>
                </div>
            </Col>
            <Col span={24} >
                <Button 
                    type="primary" 
                    size="large" 
                    block={true}
                    onClick={() => history.goBack()}>
                Back
                </Button>
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

function mapStateToProps(state){
    const { role,deadline,name,account,memberList,results,vote,totalVoted } = state.election;
    return {
        role,
        deadline,
        name,
        account,
        memberList,
        results,
        vote,
        totalVoted
    }
}

export default connect(mapStateToProps)(ResultBoard);;