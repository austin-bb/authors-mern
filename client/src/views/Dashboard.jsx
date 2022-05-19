import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import AuthorList from '../components/AuthorList';

const Dashboard = (props) => {
    const [authors, setAuthors] = useState([]);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then(res => {
                console.log(res.data)
                setAuthors(res.data)
            })
            .catch(err => console.log(err))
    }, [refresh]);

    const reload = () => {
        setRefresh(!refresh)
    }


    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to='/authors/new'>Add an author</Link>
            <h3>We have quotes by:</h3>
            <AuthorList authors={authors} reloadList={reload}/>
        </div>
    )
}

export default Dashboard