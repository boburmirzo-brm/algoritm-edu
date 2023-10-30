import React, { useEffect, useState } from 'react';
import './UserPage.css';
import { FiLogOut } from 'react-icons/fi';
import axios from '../../api/axios';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { authAdminLoggedAction } from '../../redux-actions/authAdminAction';

function UserPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [ userData, setUserData] = useState([]);
    useEffect(() => {
        setIsLoading(true)
        axios.get("registrations")
            .then(response => {
                setUserData(response.data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }, [])
    const logoutTheAdmin = () => {
        dispatch(authAdminLoggedAction());
        history.push("/login")
    }
    return (
        <div className="userpage">
            <button className='logout_btn' onClick={logoutTheAdmin}>Tizimdan chiqish <FiLogOut/> </button>
            <h1 className='userpage__title'>Ro'yxatdan o'tganlar </h1>
            <h3 className='userpage__title'>Soni {userData.length}</h3>
            <table>
                <thead>
                    <tr className='table__row'>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Registered Date</th>
                    <th>Telephone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !isLoading ? userData.map(registeredUsers => 
                            <tr key={registeredUsers._id}>
                                <td>{registeredUsers._id}</td>
                                <td>{registeredUsers.username}</td>
                                <td>{registeredUsers.regDate}</td>
                                <td>{registeredUsers.telphone}</td>
                            </tr>    
                        ) : <p>Loading...</p>
                    }
                </tbody>
            </table>
            
        </div>
    )
}

export default UserPage
