import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const AuthorForm = (props) => {
    const [name, setName] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            return
        }
        axios.post(`http://localhost:8000/api/authors`, {name})
            .then(res => {
                console.log(res)
                clearForm()
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    const clearForm = () => {
        setName("")
    }

    return (
        <div>
            <h3>Add a new author</h3>
            <Link to='/'>Dashboard</Link>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label> Name: </label>
                    <input type="text" name='name' value={name}
                        onChange={(e) => setName(e.target.value)} /> <br />
                    <button type='submit' className='btn btn-success'>Submit</button>
                    <Link to="/" className='btn btn-warning m-2'>Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export default AuthorForm