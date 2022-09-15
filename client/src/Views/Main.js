import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = () => {
    const [petList, setPetList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
        .then(res => setPetList(res.data))
        .catch(err => console.log(err));
    }, [petList]);

    return(
        <>
        <h1>Pet Shelter</h1>
        <p><Link to='/pets/new'>add a pet to the shelter</Link></p>
        <p>These pets are looking for a good home.</p>

        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {petList.map((item, idx) => 
                    <tr key={idx}>
                        <td>{item.name}</td>
                        <td>{item.type}</td>
                        <td>
                            <Link className='btn btn-outline-primary btn-sm me-3' to={`/pets/${item._id}`}>details</Link>
                            <Link className='btn btn-outline-primary btn-sm' to={`/pets/${item._id}/edit`}>edit</Link>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
        </>
    );
};

export default Main;