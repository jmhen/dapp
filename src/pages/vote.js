import React from 'react'
import { Row,Col,Avatar,Input,List,Button,Divider} from 'antd';
import { history, connect } from 'umi';
import {
    UserOutlined

} from '@ant-design/icons';


const VoteBoard = ({
    role,
    deadline,
    name,
    account,
    memberList,
    vote,
    totalVoted,
    dispatch})=>{
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
                <List
                    grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    }}
                    dataSource={memberList}
                    renderItem={ item => (
                    <List.Item>
                        <Button 
                            type="primary" 
                            shape="round" 
                            size="large" 
                            block={true}
                            onClick={() => dispatch({type:'election/vote',payload:memberList.indexOf(item)})}>
                            {item}
                        </Button>
                    </List.Item>
                    )}
                />
            </Col>

            <Col span={24}>
                <div className="centralized-block">
                    {/* <h4>My Vote: {vote==null?"You Have Not Voted.":memberList[vote]} </h4> */}
                    <h4>Total Voted: {totalVoted}</h4>
                </div>
            </Col>
            {totalVoted==memberList.length||(new Date()).getTime()>(deadline*1000)?
            <Col span={24} >
                <Button 
                    type="primary" 
                    size="large" 
                    block={true}
                    onClick={() => history.push("/results")}>
                See Results
                </Button>
            </Col>:
            'The results has not been published yet!'
            }  
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
    const { role,deadline,name,account,memberList,vote,totalVoted } = state.election;
    return {
        role,
        deadline,
        name,
        account,
        memberList,
        vote,
        totalVoted
    }
}

export default connect(mapStateToProps)(VoteBoard);;