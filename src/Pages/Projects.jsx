import React from 'react'
import Form from 'react-bootstrap/Form';
function Projects() {
  return (
    <div>
      <div className='row text-center py-5'>
        <div className="col-4"></div>
        <div className="col-4"> 
            <h1 className='text-primary'>All Projects</h1>
          <Form.Control type="text" placeholder="Search projects here" />

          </div>
        <div className="col-4"></div>
      </div>
    </div>
  )
}

export default Projects