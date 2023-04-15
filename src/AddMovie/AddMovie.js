import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import'./AddMovie.css'
function AddMovie({add}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const[Title,setTitle]= useState('')
const[Description,setDescription]= useState('')
const[rate,setRate]= useState('')
const[PoseterUrl,setPosterUrl]= useState('')
const handleTitle =(e)=>{
  setTitle(e.target.value)
}
const handleDescription =(e)=>{
  setDescription(e.target.value)
}
const handleRate =(e)=>{
  setRate(e.target.value)
}
const handlePosterUrl =(e)=>{
  setPosterUrl(e.target.value)
}
const HandleAdd =() =>{
  const newMovie= {Title
    ,Description,rate,PoseterUrl}
    add(newMovie)
    handleClose()

}
  return (
    <div className='AddMovie'>

      <Button variant="primary" onClick={handleShow}>
        Add new Movies
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control onChange={(e)=>handleTitle(e)}
                type="text"
                placeholder="Movie Title"
                autoFocus
              />
              <Form.Label>Description</Form.Label>
              <Form.Control onChange={(e)=>handleDescription(e)}
              
                type="text"
                placeholder="Description"
                autoFocus
              />
              <Form.Label>Movie Rate</Form.Label>
              <Form.Control onChange={(e)=>handleRate(e)}max={5}
                type="number"
                placeholder="Movie Rate"
                autoFocus
              />
              <Form.Label>Movie PoseterUrl</Form.Label>
              <Form.Control onChange={(e)=>handlePosterUrl(e)}
                type="text"
                placeholder="Movie PoseterUrl"
                autoFocus
              />
              
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={()=>HandleAdd()} variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddMovie;