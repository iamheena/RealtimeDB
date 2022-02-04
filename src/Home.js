import React,{useState,useEffect} from 'react';
import db from './Databse'
import {Link}from 'react-router-dom'
import './Home.css'
import { getDatabase, ref, onValue} from "firebase/database";

function Home() {
  const[data,setData]=useState({})
  useEffect(() => {
    const starCountRef = ref(db, 'users/' );
    onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  // console.log("data",data);
  setData(data)
  return()=>{
    setData({})
  }
});
    
  },[])
  // console.log("data",data);
  const deletedata=(id)=>{
    if(window.confirm("Are you sure you want to delete this data")){
        // db.child(`users/${id}`).remove((err)=>{
        //   if(err){
        //     alert(err)
        //   }else{
        //     alert("contact delete success")
        //   }
        // })
      
    }

  }
  return (
      <div style={{marginTop:"100px"}}>
        <table className="styled-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {Object.keys(data).map((id,i)=>(
             <tr key={id}>
               <td>{i+1}</td>
               <td>{data[id].name}</td>
               <td>{data[id].email}</td>
               <td>{data[id].age}</td>
               <td>
                 <Link to={`/update/${id}`}> 
                 <button className="btn btn-edit"> Edit</button>
                 
                 </Link>
                 <button className="btn btn-delete" onClick={()=>deletedata(id)}> Delete</button>

                 <Link to={`/view/${id}`}> 
                 <button className="btn btn-view"> View</button>
                 
                 </Link>
               </td>
             
             </tr>
           ))}
          </tbody>
        </table>
        
      </div>
  )
}

export default Home;
