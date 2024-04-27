

const Student = () => {
  return (
    <>
    <div className="container my-5">
        <div className="row my-5">
          <div className="col-md-12">
            <div className="form-box">
              <form>
                  
              </form>
            </div>
            <div className="card">
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
                  <tr>
                    <td> 1 </td>
                    <td> Goutam Ray </td>
                    <td> goutamr362@gmail.com </td>
                    <td> 01755302053 </td>
                    <td> Rangpur </td>
                    <td> Male </td>
                    <td> 24 </td>
                    <td> 
                      <button className="btn btn-sm btn-primary"> View </button>
                      <button className="btn btn-sm btn-info mx-2"> Edit </button>
                      <button className="btn btn-sm btn-danger"> Delete</button>
                    </td>
                  </tr>

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
