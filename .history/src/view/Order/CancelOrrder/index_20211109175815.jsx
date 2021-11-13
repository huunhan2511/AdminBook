import React,{useState} from 'react'
import {Modal,Button,Form} from "react-bootstrap";
import { Select } from 'antd';

const { Option } = Select;
let reasonCancel = ["Hết hàng","Shipper làm thất lạc đơn hàng"]
export default function CancelOrder() {
    
    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const [isDisable,setDisabled] = useState(true);    
    const handleShow = () => setShow(true);
    const [values,setValue] = useState({
        reasonCancel: ""
    });

    const inputChange = (value) =>{
        setShow(true)
        setValue((values)=> ({
          ...values,
          reasonCancel : value
        })
        );
        setDisabled(false);
        if(value === "") {
          setDisabled(true);
        }
    }
    return (
        <>
          <Button variant="danger" onClick={handleShow}>
            Hủy
          </Button>
          <Modal show={show} onHide={handleClose} animation={false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered backdrop="static" >
            <Modal.Header closeButton>
              <Modal.Title>Lý do hủy đơn hàng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Select  
                style={{width: 200}}
                showSearch
                placeholder="Select a person"
                onChange={inputChange}
                onSearch={inputChange}
            >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
            </Select>
            </Modal.Body>
          </Modal>
        </>
      );
}
