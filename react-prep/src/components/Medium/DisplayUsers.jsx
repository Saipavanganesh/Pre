import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DUMMY_API_URL } from '../../../utils/dummyApi'
import "./Medium.css"
import CircularProgress from '@mui/joy/CircularProgress';

const DisplayUsers = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    const fetchUsers = async () => {
        setLoading(true)
        try {
            const url = `${DUMMY_API_URL}/users`
            const response = await axios.get(url)
            setUsers(response.data)
        }
        catch (error) {
            console.log(error);
        }
        setLoading(false)
    }
    const filteredUsers = users.filter((user) => {
        const term = searchTerm.toLowerCase();
        return (
            user.name.toLowerCase().includes(term) ||
            user.username.toLowerCase().includes(term) ||
            user.email.toLowerCase().includes(term) ||
            user.phone.toLowerCase().includes(term) ||
            user.website.toLowerCase().includes(term) ||
            user.address.city.toLowerCase().includes(term)
        )
    })

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div>
            {
                loading ? <CircularProgress
                    color="success"
                    determinate={false}
                    size="lg"
                    value={25}
                    variant="solid"
                /> :
                    <div className='medium-container'>
                        <input type="text" placeholder='Search...' className='medium-search' onChange={handleChange} />
                        <table className='medium-table'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Website</th>
                                    <th>City</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredUsers.length === 0 ? (
                                        <tr>
                                            <td colSpan={7} style={{ textAlign: "center" }}>
                                                No matching users found.
                                            </td>
                                        </tr>
                                    ) :
                                        (
                                            filteredUsers.map((user) => {
                                                return (
                                                    <tr key={user.id}>
                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.username}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.phone}</td>
                                                        <td>{user.website}</td>
                                                        <td>{user.address.city}</td>
                                                    </tr>
                                                )
                                            })
                                        )
                                }
                            </tbody>
                        </table>
                    </div>

            }
        </div>
    )
}

export default DisplayUsers