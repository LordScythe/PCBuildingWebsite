import { useState } from "react";

function LogIn(){
    return (<>

<div className="container">
        <div className="login-container">
            <h3 className="text-center">Login</h3>

            <form className="row g-3 needs-validation">

              <div className="col-md-12 ">
                <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                <div className="input-group has-validation">
                  <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                  <div className="invalid-feedback">
                    Please choose a username.
                  </div>
                </div>
              </div>

              <div className="col-md-12 mt-2">
                <label htmlFor="validationCustom03" className="form-label">Password</label>
                <div className="input-group has-validation">
                  <input type="text" className="form-control" id="validationCustom03" required ></input>
                  <span className="input-group-text" id="inputGroupPrepend">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                    </svg>
                  </span>
                </div>
                <div className="invalid-feedback">
                  Please provide a valid password.
                </div>
              </div>

              <div className="col-md-12 mt-4">
                <button className="btn btn-primary" type="submit">Log In</button>
              </div>
                
            </form>
        </div>
    </div>
    
    </>);
};

export default LogIn;