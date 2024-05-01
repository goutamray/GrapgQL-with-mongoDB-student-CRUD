import { useState } from "react";



const Login = () => {

  const [input, setInput ] = useState({
    email : "",
    password : "",
   })

  // haandle Input Change 
  const handleInputChange = (e) => {
    setInput((prevState) => ({
        ...prevState,
        [e.target.name] : e.target.name
    }))
  };

  // form submit 
  const handleFormSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <>
        <div className="container my-5">
        <div className="row justify-content-center">
              <div className="card-body">
                  <div className="col-sm-6">
                  <div className="card p-3">
                    <h3> Login Student </h3>
                  <form onSubmit={handleFormSubmit}>     
                    <div className="my-3">
                      <input type="text" placeholder="Email" className="form-control" name="email" value={input.email} onChange={handleInputChange}/>
                    </div>
                    <div className="my-3">
                      <input type="text" placeholder="Password" className="form-control" name="password" value={input.password} onChange={handleInputChange}/>
                    </div>
                    <div className="my-3">
                      <button className="btn btn-primary"> Login </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login


