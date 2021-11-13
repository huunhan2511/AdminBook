import React from 'react'
import { Accordion } from 'react-bootstrap';
import CardTable from '../../../components/CardTable';
const titleTable = ["id","Tên sản phẩm","số lượng"];
export default function ContentManageProduct() {
    return (
        <div className="ContentManagerProduct">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Danh sách sản phẩm</Accordion.Header>
                    <Accordion.Body>
                        <CardTable titllTable = {titleTable}/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
