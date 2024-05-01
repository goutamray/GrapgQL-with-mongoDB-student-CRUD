
import { useMutation, useQuery } from "@apollo/client"
import { useState } from "react";
import { GET_ALL_STUDENTS } from "../graphql/query";
import { CREATE_STUDENT, DELETE_STUDENT } from "../graphql/mutation";

const Student = () => {
 const [input, setInput ] = useState({
    name : "",
    email : "",
    phone : "",
    location : "",
    age : "",
    gender : "",

 });

 // handleInputChange 
 const handleInputChange = (e) => {
  setInput((prevState) => ({
     ...prevState,
     [e.target.name] : e.target.value
  }))
 };       
  


 // get all students
 const {loading, error, data }  = useQuery(GET_ALL_STUDENTS);

// create student 
 const [ createStudent, { loading : loadingMu, error : errorMu, data : dataMu}] = useMutation(CREATE_STUDENT, {
  refetchQueries : ["studentQuery"] 
 });

 // handle student create
 const handleStudentCreate = (e) => {
  e.preventDefault(); 

  createStudent({
    variables : {
      ...input,
      age : Number(input.age)
    }
  });

  setInput({
    name : "",
    email : "",
    phone : "",
    location : "",
    age : "",
    gender : "",
  })
 }; 

const [deleteStudent, {loading : loadingD, error : errorD, data : dataD}] = useMutation(DELETE_STUDENT, {
  refetchQueries : ["studentQuery"] 
});

 // delete student 
 const handleStudentDelete = (id) => {
  deleteStudent({
    variables : {
      deleteStudentId : id
    }
  })
 }; 

  return (
    <>
    <div className="container my-5">
        <div className="row my-5">
          <div className="col-md-12">
            <div className="card p-3"> 
            <div className="form-box">
              <h3 > Add new Student </h3> 
              <form onSubmit={handleStudentCreate}>
                  <div className="row">
                    <div className="col-sm-4 my-2">
                      <input type="text" placeholder="Name" className="form-control" name="name" value={input.name} onChange={handleInputChange}/>
                    </div>
                    <div className="col-sm-4 my-2">
                      <input type="text" placeholder="Email" className="form-control" name="email" value={input.email} onChange={handleInputChange}/>
                    </div>
                    <div className="col-sm-4 my-2">
                      <input type="text" placeholder="Phone" className="form-control" name="phone" value={input.phone} onChange={handleInputChange}/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <input type="number" placeholder="Age" className="form-control" name="age" value={input.age} onChange={handleInputChange}/>
                    </div>
                    <div className="col-sm-4">
                      <input type="text" placeholder="Gender" className="form-control" name="gender" value={input.gender} onChange={handleInputChange}/>
                    </div>
                    <div className="col-sm-4">
                      <input type="text" placeholder="Location" className="form-control" name="location" value={input.location} onChange={handleInputChange}/>
                    </div>
                  </div>
                  <div className="row">
                    <button className="btn btn-primary mt-2" style={{width: "150px"}}> Submit </button>
                  </div>
               </form>
             </div>
            </div>

            <div className="card my-5 p-3">
              <h2 className="text-center"> All Students Data Table </h2>
            <table className='table table-striped table-bordered'>
                <thead>
                   <tr>
                    <th> # </th>
                    <th> Name </th>
                    <th> Email </th> 
                    <th> Phone </th> 
                    <th> Location </th>
                    <th> Gender </th>
                    <th> Age </th>
                    <th> Action </th>
                   </tr>
                </thead>   
                <tbody>   
                  {
                    data && data.getAllStudents.map((item, index) => {
                      return  <tr key={index}>
                      <td> { index + 1} </td>
                      <td> { item.name } </td>
                      <td> { item.email } </td>
                      <td> { item.phone  } </td>
                      <td> { item.location } </td>
                      <td> { item.gender } </td>
                      <td> { item.age } </td>
                      <td> 
                        <button className="btn btn-sm btn-primary"> View </button>
                        <button className="btn btn-sm btn-info mx-2"> Edit </button>
                        <button className="btn btn-sm btn-danger" onClick={() => handleStudentDelete(item.id)}> Delete</button>
                      </td>
                    </tr>
                    })
                  }
                 

                </tbody>
            </table>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Student
