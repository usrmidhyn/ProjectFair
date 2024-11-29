import React from 'react'
import { Link } from 'react-router-dom'
function Auth({ register }) {
  return (
    <div>
      <div className="row" style={{padding:"100px"}}>
        <div className="col-6">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYPM0mPPnXnjqJSnmKtCFVlommv27hFcmVg&s" alt="howdo" />
        </div>
        <div className="col-6">
          <h6>sign {
            register ? "up" : "in"
          }
          </h6>
          {
            register && <input type="text" placeholder='username' className='form-control mb-3' />
          }
          <input type="text" placeholder='email' className='form-control mb-3' />
          <input type="password" placeholder='password' className='form-control mb-3' />
          {
            register ? <div>
              <button type="button" className="btn btn-primary">Sign Up</button>
              <p>already registered? <Link to={'/Login'}>login now</Link></p>
            </div>
              :
              <div>
                <button type="button" className="btn btn-primary">Login</button>
                <p>new here <Link to={'/register'}>Sign Up</Link></p>
              </div>

          }

        </div>
      </div>

    </div>
  )
}

export default Auth