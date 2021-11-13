import React,{useState} from 'react';
import {Modal,Button,Form,Row,Col} from "react-bootstrap";
export default function ModalEdit(props) {
    const [show, setShow] = useState(false);  
    const [values,setValue] = useState({
      idCategory:"",
      nameCategory:""
    });
    const handleClose = () => setShow(false);
        
    const handleShow = () => setShow(true);
    const handleEdit = () =>{
        if(document.getElementById("nameCategory").value === props.dataModal.tenTheLoai){
            handleClose();
            console.log("close");
        }else{
            console.log("save");
        }
    }
    const inputChange = (event) =>{
      const target = event.target;
      const name = target.name;
      const value = target.value;
      setValue((values)=> ({
        ...values,
        idCategory: props.id,
        [name] : value
      })
      );
    }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Sửa
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>Sửa thể loại</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                    <Form noValidate className="FormEditCate">
                            <Row>
                                <Form.Group as={Col} controlId="formGridId">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type='text' name="idCategory" defaultValue={props.dataModal.id} readOnly required/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridNameCategory">
                                    <Form.Label>Tên thể loại</Form.Label>
                                    <Form.Control type='text' name="nameCategory" id="nameCategory" defaultValue={props.dataModal.tenTheLoai} required onChange={(event)=>inputChange(event)}/>
                                    <Form.Control.Feedback type="invalid">Vui lòng nhập tên thể loại</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                    </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleEdit}>
                Lưu
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }