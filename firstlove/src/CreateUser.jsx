import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
 function CreateUser() {
    const [name,setName]=useState()
    const [email, setEmail]=useState()
    const [age, setAge]=useState()

    const navigate = useNavigate()
    const Submit=(e) =>{
        e.preventDefault();
        axios.post('http://localhost:3001/CreateUser', {name, email, age})
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err => console.log(err));
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
    <form onSubmit={Submit}>
    <h2>ADD USER</h2>
            <div className='mb-2'>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required 
            onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='mb-2'>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required
            onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='mb-2'>
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" required
            onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <button className='btn btn-success'type="submit">Submit</button>
    </form>
</div>
</div>
  )
}

export default CreateUser;
