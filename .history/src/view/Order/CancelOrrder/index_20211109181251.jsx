import React,{useState,useRef} from 'react'
import {Modal,Button} from "react-bootstrap";
let reasonCancel = ["Hết hàng","Shipper làm thất lạc đơn hàng"]
export default function CancelOrder() {
    const inputReason = useRef();
    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const [isDisable,setDisabled] = useState(true);    
    const handleShow = () => setShow(true);
    const [values,setValue] = useState({
        reasonCancel: ""
    });

    const inputChange = () =>{
        let value = inputReason.current.value
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
            
            </Modal.Body>
          </Modal>
        </>
      );
}
