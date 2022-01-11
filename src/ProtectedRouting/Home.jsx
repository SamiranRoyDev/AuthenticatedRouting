import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="row justify-content-end">
            <div className="col-4">
                <h3>Home Page</h3>
            </div>
                <div className="col-2">
         <Link to='/login'> <button className='btn btn-primary'>Login</button> </Link>   
                </div>
                <div className="col-2">
         <Link to='/dashboard'> <button className='btn btn-warning'>Dashboard</button> </Link>   
                </div>
            </div>
        </>
    )
}
export default Home