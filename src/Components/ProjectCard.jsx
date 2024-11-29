import React from 'react'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaGithubSquare } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
    <Card style={{ width: '18rem' }} onClick={handleShow}>
    <Card.Img variant="top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fb6ab904-85d0-4aee-8c0b-e734cddd5961/db4k4kx-1c9aa08b-310f-4f73-ab59-e77f5e2573aa.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZiNmFiOTA0LTg1ZDAtNGFlZS04YzBiLWU3MzRjZGRkNTk2MVwvZGI0azRreC0xYzlhYTA4Yi0zMTBmLTRmNzMtYWI1OS1lNzdmNWUyNTczYWEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XsNWI5rDlklqoZ_Sk4Mi4RerKHUFnZpgKT36FQRPKgs" />
      <Card.Body>
     
        <Card.Title>Project Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Project synopsis?</Card.Subtitle>
        <Card.Text>
         project is made of bunch of bs and all that good good sht
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row d-flex">
          <div className="col">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Color_Flash.gif" alt="place" />
          </div>
          <div className="col">
            <h3>Descrption</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sint corporis possimus, quasi consequuntur, aliquam rem cupiditate architecto dolorem corrupti sapiente? Architecto iusto perferendis esse molestiae? Consectetur quos labore distinctio!</p>
          </div>
          </div>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
          <FaGithubSquare className='fs-1'/>
          </Button>
          <Button variant="primary" onClick={handleClose}>
          <FaLink className='fs-1' />
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProjectCard