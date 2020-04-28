import React from 'react'
import { Row, Col } from 'antd';


export default (props)=>{
    return(
        <div className="general-bg" >
             <Row style={{paddingTop:"5%",paddingLeft:"20%",paddingRight:"20%"}}>
                <Col xs={{span:24}}>
                        { props.children}
                </Col>
            </Row>
        </div>
    )
}