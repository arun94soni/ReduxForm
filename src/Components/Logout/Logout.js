import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../features/userSlice';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';

const Logout = () => {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(logout());
    }
    return (
        <div>
            <h1>Welcome <span><strong >{user.name}</strong>, You are successfully Registered and Logged in.</span>
            </h1>
            <button className="btn btn-success" onClick={(e) => handleLogout(e)}>Logout</button>
        </div>
    )
}

export default Logout
