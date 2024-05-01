import { Link } from "react-router-dom"



import "./Header.css"; 
const Header = () => {
  return (
    <>
    <div className="header shadow">
    <div className="container">
        <div className="row">
          <div className="col-sm-3">
               <div className="logo">
                <h2> Goutam Ray </h2>
               </div>
          </div>
          <div className="col-sm-9">
            <div className="menu">
              <ul>
                <li ><Link to="/"> Home </Link></li>
                <li><Link to="/register"> Register </Link></li>
                <li><Link to="/login"> Login </Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Header
