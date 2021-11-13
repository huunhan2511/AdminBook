import React from 'react';
import { Accordion,Table } from 'react-bootstrap';
const headerTable = ["id","User name"];

export default function ContentManageOrder() {
    return (
        <div className="ContentManageOrder">
            <Accordion defaultActiveKey="0" className="ContentManageUser__accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Danh sách tài khoản khách hàng</Accordion.Header>
                    <Accordion.Body>
                    <div className="cardTable">
                        <Table>
                            <thead>
                                <tr>                  
                                {headerTable.map((data,key)=>{
                                    return (
                                    <th key={key}>{data}</th>  
                                    );
                                })}
                                </tr>
                            </thead>
                            <tbody>
                               
                                })}
                            </tbody>
                        </Table>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
