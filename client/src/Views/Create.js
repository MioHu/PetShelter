import React, { useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const petCreate = pet => {
        axios.post('http://localhost:8000/api/pets', pet)
        .then(() => navigate('/'))
        .catch(err => {
            console.log(err);
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
        <p>Know a pet needing a home?</p>
        <div className="card card-body mb-3">
            <Form formProps={petCreate} initialInfo={{name:'', type:'', description:'', skill1:'', skill2:'', skill3:''}} btn='Add'/>
        </div>
        {errors.map((err, idx) => <p key={idx} className='text-danger mb-1'>{err}</p>)}
        </>
    );
};

export default Create;