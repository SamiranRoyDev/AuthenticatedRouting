import React from 'react'
import {Outlet} from 'react-router';
import {Navigate} from 'react-router-dom';
// import Home from './ProtectedRouting/Home';


const useAuth = ()=>{
    // console.log(`saurab`,props);
    const user = {loggedIn:false};
    
    return user && user.loggedIn; 
}

const ProtectedRoutes = (props) => {
    console.log("=>",props)
    const isAuth = useAuth(props);

    return (isAuth?<Outlet/>:<Navigate to='/login' />)
}

export default ProtectedRoutes
