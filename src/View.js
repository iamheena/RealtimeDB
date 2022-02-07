import React,{useState,useEffect} from 'react';
import db from './Databse';
import {useParams,useHistory,Link} from 'react-router-dom'
import './view.css'
import {get, ref, set,onValue } from "firebase/database";

function View() {
  const[user,setUser]=useState({})
  const {id}=useParams()
  useEffect(() => {
    const starCountRef = ref(db, `users/${id}` );
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();    
              setUser(data)
              
             
      });    

  },[id])
  console.log("userrrrr",user);
  return (
  <div style={{marginTop:"150px"}}>
    <div className="card">
      <div className="card-header">
        <p>User contact detail</p>
      </div>
      <div className="container">
        <strong>ID: </strong>
        <span>{id}</span><br /><br />

        <strong>Name: </strong>
        <span>{user.name}</span><br /><br />

        <strong>Age: </strong>
        <span>{user.age}</span><br /><br />

        <strong>Email: </strong>
        <span>{user.email}</span><br /><br />

        <Link to="/">
          <button className="btn btn-edit">Go Back</button>
        </Link>

      </div>
    </div>
   
  </div>
  )
}

export default View;
