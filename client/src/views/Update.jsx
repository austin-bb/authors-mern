import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setName(res.data.name);
            })
    }, [id]);

    const updateProduct = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, { name })
            .then(res => navigate(`/`))
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h3>Edit Author</h3>
            <form onSubmit={updateProduct}>
                <div className='form-group'>
                    <label> Name: </label>
                    <input type="text" name="name" value={name}
                        onChange={(e) => { setName(e.target.value)}} />
                </div>
                <button type='submit' className='btn btn-success'> Edit </button>
                <Link to="/" className='btn btn-warning m-2'>Cancel</Link>
            </form>
        </div>
    )
    }

export default Update

