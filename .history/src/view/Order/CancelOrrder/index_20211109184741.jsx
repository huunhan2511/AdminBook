import React,{useState} from 'react'
import {Button} from "react-bootstrap";
import { Select } from 'antd';

import { Modal } from 'antd';

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
        setValue((values)=> ({
          ...values,
          reasonCancel : value
        })
        );
        setDisabled(false);
        if(value === "") {
          setDisabled(true);
        }
        console.log(values);
    }
    return (
        <>
          {/* <Button variant="danger" onClick={handleShow}>
            Hủy
          </Button>
          <Modal show={show} onHide={handleClose} animation={false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered backdrop="static" >
            <Modal.Header closeButton>
              <Modal.Title>Lý do hủy đơn hàng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modalCancel">
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Chọn lý do"
                onChange={inputChange}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>  
              </Select>
              </div>
            </Modal.Body>
          </Modal> */}

        <Button onClick={handleShow}>
          Vertically centered modal dialog
        </Button>
        <Modal
          title="Vertically centered modal dialog"
          centered
          visible={show}
          onCancel={handleClose}
        >
          <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Chọn lý do"
                onChange={inputChange}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>  
              </Select>
        </Modal>
        </>
      );
}