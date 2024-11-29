import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function AddProject() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
       <Button variant="primary" onClick={handleShow}>
        Add
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Add your project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6">
              <label>
              <input type="file" name="imagefile" style={{display:'none'}}/>
              <img src="https://cdn.dribbble.com/users/2069402/screenshots/5574718/gif-4mb.gif" width={'100%'} alt="" />
              </label>
             
            </div>
            <div className="col-6">
              <input type="text" className='form-control mb-3' placeholder='Name'/>
              <input type="text" className='form-control mb-3' placeholder='Language' />
              <input type="text" className='form-control mb-3' placeholder='github'/>
              <input type="text" className='form-control mb-3' placeholder='email' />
              <textarea className='form-control mb-3' placeholder='Overview'/>

              </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Done!</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject