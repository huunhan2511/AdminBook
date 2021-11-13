import React,{useState} from 'react'
import {Modal,Button} from "react-bootstrap";
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

    const inputChange = () =>{
      const value = ""
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
          <Button variant="danger" onClick={handleShow}>
            Hủy
          </Button>
          <Modal show={show} onHide={handleClose} animation={false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered backdrop="static" >
            <Modal.Header closeButton>
              <Modal.Title>Lý do hủy đơn hàng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <label>
            Chọn lý do :
            <input list="reasonCancel" name="reasonCancel" ref={inputReason} onChange={inputChange} />  
            </label>   
            <datalist id="reasonCancel">
               {reasonCancel.map((reason,key)=>{
                 return (<option key={key} value={reason}/>)
               })} 
            </datalist>
            </Modal.Body>
          </Modal>
        </>
      );
}
