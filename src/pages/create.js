import React from 'react'
import { Row,Col,Avatar,Input,List,Button,Divider,Form,DatePicker,Typography} from 'antd';
import { createElection } from '@/services/blockchain.js'
import ItemTable from '@/components/ItemTable'

const { Text } =Typography;
export default class Creation extends React.Component{
     state = {
        members:[],
        confirm:'Confirm'
     };
     onFinish = (fieldValues)=>{
        const formattedDeadline = fieldValues['deadline'].format('YYYY/MM/DD HH:mm:ss');
        const unixDeadline = (new Date(formattedDeadline).getTime()/1000);
        const values = {
            ...fieldValues,
            'deadline': unixDeadline,
            'members':this.state.members
        }
        console.log(values);
        createElection(values);
    }

     onSubmitMembers(members){
        this.setState({ members:members, confirm:'Confirmed' });
        console.log(this.state.members);
    }
    
    
    render(){
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                editable: true,
            },
            {
                title: 'Account',
                dataIndex: 'account',
                editable:true,
            },
        
        ];
        const newData = {
            "name": "MemberName",
            "account": "0x0000000000000000000000000000000000000000",
        };
        return(
            <Form id="election-creation" 
                    onFinish={this.onFinish}
                    layout="vertical"
                >
                <Row gutter={[0,0]} style={{padding:64, background: "white"}} className="card-style">
                <Col span={24}>
                    <div className="centralized-block">
                        <h2> New Election </h2>
                    </div>
                </Col>
                <Col span={24} >
                    <Form.Item name="role" label="Role" >
                        <Input placeholder="e.g. Captain" />
                    </Form.Item>
                </Col>
                <Col span={24} >
                    <Form.Item name="deadline" label="Deadline" >
                        <DatePicker showTime />
                    </Form.Item>
                </Col>
                <Col span={24} >
                    <Form.Item name="members" label="Members" >
                        <ItemTable itemName="Member" columns={columns} newData={newData} 
                            items={[{
                                "key": 0,
                                "name": "MemberName",
                                "account": "0x0000000000000000000000000000000000000000",
                            }]}
                            value={Array}
                            summary={pageData => {
                                return(
                                    <>
                                        <tr>
                                            <th>Total</th>
                                            <td>
                                                <Text type="danger">{pageData.length}</Text>
                                            </td>
                                            <td>
                                                <Button  type="primary" size="small" onClick={()=>this.onSubmitMembers(pageData)} block={true}>
                                                    {this.state.confirm}
                                                </Button>
                                            </td>
                                        </tr>
                                    </>
                                    
                                )
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col span={24} >
                    <Form.Item >
                        <Button className="box-right" type="primary" shape="round" htmlType="submit" size="large" block={true}>
                            Create
                        </Button>      
                    </Form.Item>
                </Col>
                
                </Row>
            </Form>
    
        )
    }
 
}

