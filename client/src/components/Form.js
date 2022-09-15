import React, { useEffect, useState } from "react";

const Form = props => {
    const [pet, setPet] = useState({name:'', type:'', description:'', skill1:'', skill2:'', skill3:''});

    useEffect(() => {
        setPet(props.initialInfo);
    }, [props.initialInfo])

    const handleSubmit = e => {
        e.preventDefault();
        props.formProps(pet);
    };

    return(
        <form onSubmit={handleSubmit} className='row'>
            <div className="col">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type='text' onChange={e => setPet({...pet, name:e.target.value})} className='form-control' value={pet.name}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Type</label>
                    <input type='text' onChange={e => setPet({...pet, type:e.target.value})} className='form-control' value={pet.type}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type='text' onChange={e => setPet({...pet, description:e.target.value})} className='form-control' value={pet.description}/>
                </div>
                <button type="submit" className="btn btn-primary">{props.btn} pet</button>
            </div>
            <div className="col">
                <p>Skills (optional)</p>
                <div className="mb-3">
                    <label className="form-label">Skill 1</label>
                    <input type='text' onChange={e => setPet({...pet, skill1: e.target.value})} className='form-control' value={pet.skill1}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Skill 2</label>
                    <input type='text' onChange={e => setPet({...pet, skill2: e.target.value})} className='form-control' value={pet.skill2}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Skill 3</label>
                    <input type='text' onChange={e => setPet({...pet, skill3: e.target.value})} className='form-control' value={pet.skill3}/>
                </div>
            </div>
        </form>
    );
};

export default Form;