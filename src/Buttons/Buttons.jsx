import React from 'react'
import './Button.scss'
import { Link } from 'react-router-dom';
const Button = () => {
//   const handle =(e)=>{
//     e.preventDefault();
//     handleClick();
//     }
  return (
    <div className="button-container  ">
        <div className="row m-3">
            <div className="col-12 ">
                <div className="card shadow mb-3">
                    <div className="card-body">
    <div className='b'>
    <button className="btn btn-md shadow"><Link to="/product" style={{textDecoration:"none",color:"white"}} >ADD</Link> </button>   
    </div> 
    <br />
    <div className='b'>
    
    <button className="btn btn-md shadow" ><Link to="/product" style={{textDecoration:"none",color:"white"}}>UPDATE</Link> </button>  
    </div>
    <br />
    <div  className='b'>
    <button className="btn btn-md shadow" ><Link to="/product" style={{textDecoration:"none",color:"white"}}>DELETE</Link> </button>  
    </div>
    <br />
    <div  className='b'>
    <button className="btn btn-md shadow" ><Link to="/product" style={{textDecoration:"none",color:"white"}} >SHOW</Link> </button>  
    </div>
    <br />
    <div  className='b'>
    <button className="btn btn-md shadow" ><Link to="/product" style={{textDecoration:"none",color:"white"}}>GET ORDERS</Link> </button>  
    </div>
    <br />
    <div  className='b'>
    <button className="btn btn-md shadow" ><Link to="/product" style={{textDecoration:"none",color:"white"}}>GET USERS</Link> </button>  
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
   
    
  )
}
export default Button