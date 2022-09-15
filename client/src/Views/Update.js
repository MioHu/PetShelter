import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const {id} = useParams();
    const [pet, setPet] = useState({});
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/'+id)
        .then(res => setPet(res.data))
        .catch(err => console.log(err));
    }, []);

    const petUpdate = pet => {
        axios.put('http://localhost:8000/api/pets/'+id, pet)
        .then(() => navigate('/'))
        .catch(err => {
            const errRes = err.response.data.errors;
            const errArr = [];
            for(let key in errRes){
                errArr.push(errRes[key].message);
            }
            setErrors(errArr);
        });
    };

    return(
        <>
        <h1>Pet Shelter</h1>
        <p><Link to='/'>back to home</Link></p>
        <p>Edit {pet.name}</p>
        <div className="card card-body mb-3">
            <Form formProps={petUpdate} initialInfo={pet} btn='Edit'/>
        </div>
        {errors.map((err, idx) => <p key={idx} className='text-danger mb-1'>{err}</p>)}
        </>
    );
};

export default Update;