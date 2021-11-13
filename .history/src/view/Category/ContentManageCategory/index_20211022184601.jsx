import React,{useState} from 'react'
import { Accordion,Form,Col,Row,Button,Table,Modal } from 'react-bootstrap';
const headerTable = ["id","Tên thể loại"];
const dataCategory = [
    {id : 1, tenTheLoai: "Trinh Thám"},
    {id : 2, tenTheLoai: "Thiếu Nhi"},
    {id : 3, tenTheLoai: "Tiểu Thuyết"},
    {id : 4, tenTheLoai: "Giáo trình"},
];
export default function ContentManageCategory() {
    function Example(props) {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <Button variant="primary" onClick={handleShow}>
              Launch demo modal
            </Button>
      
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
    const [validated,setValidated] = useState(false);
    const getLast = ()=>{
        return dataCategory[dataCategory.length-1].id;
    };
    const submitFormAdd = (event)=>{
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
        }
        setValidated(true);
    }
    return (
        <div className="ContentManageCategory">
            <Accordion defaultActiveKey="0" className="ContentManageCategory__accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Danh sách thể loại</Accordion.Header>
                    <Accordion.Body>
                    <div className="cardTable">
                        <Table>
                            <thead>
                                <tr>                  
                                {headerTable.map((data)=>{
                                    return (
                                    <th>{data}</th>  
                                    );
                                })}
                                </tr>
                            </thead>
                            <tbody>
                                {dataCategory.map((data)=>{
                                    return (
                                        <tr>
                                            <td>{data.id}</td>
                                            <td>{data.tenTheLoai}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Thêm thể loại</Accordion.Header>
                    <Accordion.Body>
                        <Form noValidate validated={validated} onSubmit={(event)=>submitFormAdd(event)} class="FormAddCate">
                            <Row>
                                <Form.Group as={Col} controlId="formGridId">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type='text' name="idCategory" value={getLast()+1} disabled required/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridNameCategory">
                                    <Form.Label>Tên thể loại</Form.Label>
                                    <Form.Control type='text' name="nameCategory" required/>
                                    <Form.Control.Feedback type="invalid">Vui lòng nhập tên thể loại</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <div className="btnSubmit">
                                <Button variant="primary" type="submit">
                                    Thêm thể loại
                                </Button>
                            </div>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Sửa thể loại</Accordion.Header>
                    <Accordion.Body>
                        <Form>

                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
