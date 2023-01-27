import React from 'react'
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div>
      
        <div className="mb-5 p-5 ">
            {/*<Link to="/Business">*/}
            <a href="/Business"> 
            <button  type="button" class="btn btn-primary btn-lg" >Business</button>
            </a>
       
       {/* </Link>*/}
        </div>
        <div className="mb-5 p-5 ">
           {/*} <Link to="/Client">*/}
           <a href="/Client">
          <button  type="button" class="btn btn-primary btn-lg" >Client</button>
          </a>
          {/*</Link>*/}
        </div>
      
    </div>
  )
}
