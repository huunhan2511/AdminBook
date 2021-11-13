import React from 'react'
import { Accordion } from 'react-bootstrap';
import CardTable from '../../../components/CardTable';
const titleTable = ["id","Tên sản phẩm","số lượng"];
export default function ContentManageProduct() {
    return (
        <div className="ContentManageProduct">
            <Accordion defaultActiveKey="0" className="ContentManageProduct__accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Danh sách sản phẩm</Accordion.Header>
                    <Accordion.Body>
                        <CardTable headerTable = {titleTable}/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Thêm sản phẩm</Accordion.Header>
                    <Accordion.Body>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}