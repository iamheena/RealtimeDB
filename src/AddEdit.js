import React,{useState,useEffect} from 'react';
import {useNavigate,useParams} from 'react-router-dom'
import {get, ref, set } from "firebase/database";
import './AddEdit.css'
import db from './Databse'


const initialstate={
  age:"",
  email:"",
  name:""
}

function AddEdit() {
  const[state,setState]=useState({initialstate});
  const [data,setData]=useState({})
  const[count,setCount]=useState(0)
  const {age,name,email}=state;
  const Navigate=useNavigate()

  const handleInput=(e)=>{
    const {name,value}=e.target
    setState({...state,[name]:value});

  }

  const handleSubmit=(e)=>{  
    e.preventDefault();   
    if(!name|| !email || !age){     
     alert("Please provide in each");
    } 
    else{      
     let userId=Math.random().toString(36).replace(/[^a-z]+/g, '').substr();

     console.log('userId',userId);
   
      set(ref(db, `users/`+ userId ), {
        name: name,
        email: email,
        age : age
      }).then(()=>{
        alert("data store successs")
      }).catch((e)=>{
        alert("error",e)
      })
      setTimeout(()=>Navigate("/"),500)
    
    }
    setState({name:"",age:"",email:""})
  }
  // const getdata=()=>{
  //   const dbref=ref(db, 'users/' );
  //   get(child(dbref, 'users/')).then((snapshot)=>{
  //     if(snapshot.exists()){

  //     }
  //   })
  // }



  return (
  <div style={{marginTop:"100px"}}>

<form action="" style={{margin:"auto",padding:"15px",maxWidth:"400px",
alignContent:"center"}} onSubmit={handleSubmit}>
  
  <label htmlFor="name">Name</label>
  <input type="text" placeholder="your name" value={name|| ""} name="name" onChange={handleInput}/>


  <label htmlFor="age">Age</label>
  <input type="number" placeholder="your age" value={age || ""} name="age" onChange={handleInput}/>


  <label htmlFor="email">Email</label>
  <input type="email" placeholder="your name" value={email ||""} name="email" onChange={handleInput}/>
<input type="submit" value="save" />

</form>

  </div>
  
  )
}

export default AddEdit;
