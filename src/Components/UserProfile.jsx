import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
function UserProfile() {
  const [open, setOpen] = useState(false);
  return (
    <div>
 <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        style={{border:'1px solid', "border-radius":"",}}
      >
        <img src="https://cdn-icons-png.freepik.com/256/12533/12533276.png?semt=ais_hybrid" width={'30px'} alt="" />
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </div>
  )
}

export default UserProfile
