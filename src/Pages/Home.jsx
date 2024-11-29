import React from 'react'
import ProjectCard from '../Components/ProjectCard'

function Home() {
  return (
    <div>
        <div className="row" style={{height:'500px'}} id='banner'>
            <div className="col-3"></div>
            <div className="col-5 py-5">
                <h1 className='text-primary'>Project Fair</h1>
                <p>one destination for all your project needs</p>
                <button type="button" class="btn btn-outline-primary">Primary</button>
            </div>
            <div className="col-4">
                <img src="https://i.pinimg.com/originals/50/25/2d/50252d947feae0eb33d650d239d313db.gif" width="100%" height="100%" style={{padding:'20px'}} alt="" />
            </div>
        </div>
        <h1 className='text-center my-3'>EXPLORE OUR PROJECT</h1>
       <div className="row2 d-flex my-5  " >
        <div className="col-4"><ProjectCard/></div>
        <div className="col-4"><ProjectCard/></div>
        <div className="col-4"><ProjectCard/></div>
       </div>
    </div>
  )
}

export default Home