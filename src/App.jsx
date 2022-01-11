import React,{useState} from 'react'
import {Routes,Route} from 'react-router-dom';
import Dashboard from './ProtectedRouting/Dashboard';
import Login from './ProtectedRouting/Login';
import Home from './ProtectedRouting/Home';
import ProtectedRoute from './ProtectedRoutes'

const App = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const handleCallback = (data)=>{
        console.log(data);
       setIsLoggedIn(data);
       console.log(isLoggedIn);
    }
    return (
        <>
            <Routes>
            <Route path='/login' element={<Login parentCallback = {handleCallback}/>}/>
            <Route element={<ProtectedRoute  data = {isLoggedIn} />}>
                <Route path='/' element={<Home/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Route>
            </Routes>
        </>
    )
}

export default App
//name