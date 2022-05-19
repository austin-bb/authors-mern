import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const AuthorList = (props) => {
    

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/authors/${deleteId}`)
            .then(res => {
                props.reloadList()
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <table className='table-bordered'>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.authors.map((author, i) => {
                            return (
                                <tr key={i}>
                                    <td className='h4'>{author.name}</td>
                                    <td>
                                        <Link to={`/authors/${author._id}/edit`} className="btn btn-warning btn-sm m-2">Edit</Link>
                                        <button className='btn btn-danger btn-sm' onClick={() => handleDelete(author._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList