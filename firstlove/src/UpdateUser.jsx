import React,{useState , useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
function UpdateUser() {
    const {id} = useParams()
    const [name,setName]=useState()
    const [email, setEmail]=useState()
    const [age, setAge]=useState()
    const navigate = useNavigate()

    
 useEffect(()=>{

    axios.get('http://localhost:3001/getUser/'+id)
    .then(result => {console.log(result)
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age)
        

    })
    
    
    .catch(error => console.log(error)) 

 }, [])

const Update = (e) => {
    e.preventDefault();
    axios.put('http://localhost:3001/updateUser/'+id, {name, email, age})
    .then(res => {
        console.log(res)
        navigate('/')
    })
    .catch(err => console.log(err));

}

  return (
<div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
    <form onSubmit={Update}>
    <h2>Update USER</h2>
            <div className='mb-2'>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required 
              value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='mb-2'>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required
             value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='mb-2'>
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" required
            value={age} onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <button className='btn btn-success'type="submit">Submit</button>
    </form>
</div>
</div>
  )
}

export default UpdateUser
