import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const Detail = () => {
    const {id} = useParams();
    const [pet, setPet] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/'+id)
        .then(res => setPet(res.data))
        .catch(err => console.log(err));
    }, [pet]);

    const petDelete = () => {
        axios.delete('http://localhost:8000/api/pets/'+id)
        .then(() => navigate('/'))
        .catch(err => console.log(err));
    };

    const petLike = () => {
        axios.put('http://localhost:8000/api/pets/'+id, {...pet, like: pet.like+1})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };

    return(
        <>
        <h1>Pet Shelter</h1>
        <p><Link to='/'>back to home</Link></p>
        <p>Details about {pet.name}</p>
        <button className="btn btn-outline-danger btn-sm mb-3" onClick={petDelete}>Adopt {pet.name}</button>
        <div className="card card-body">
            <p>Pet type: {pet.type}</p>
            <p>Description: {pet.description}</p>
            <p>Skills: {pet.skill1}<br/>
            <span style={{visibility:'hidden'}}>Skills: </span>{pet.skill2}<br/>
            <span style={{visibility:'hidden'}}>Skills: </span>{pet.skill3}</p>
            <p>
                <button className="btn btn-outline-success btn-sm me-3" onClick={petLike}>Like {pet.name}</button>
                {pet.like} like(s)
            </p>
        </div>
        </>
    );
};

export default Detail;