import { useState } from "react"



const Register = () => {
   const [input, setInput ] = useState({
    name : "",
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
                    <h3> Register Student </h3>
                  <form onSubmit={handleFormSubmit}>
                    <div className="my-3">
                      <input type="text" placeholder="Name" className="form-control" name="name" value={input.name} onChange={handleInputChange}/>
                    </div>
                    <div className="my-3">
                      <input type="text" placeholder="Email" className="form-control" name="email" value={input.email} onChange={handleInputChange}/>
                    </div>
                    <div className="my-3">
                      <input type="text" placeholder="Password" className="form-control" name="password" value={input.password} onChange={handleInputChange}/>
                    </div>
                    <div className="my-3">
                      <button className="btn btn-primary"> Create </button>
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

export default Register















