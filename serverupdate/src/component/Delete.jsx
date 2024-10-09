import React,{useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Delete() {
    const {id}=useParams()
    const navigate=useNavigate();
    const deleteData=()=>{
        axios.delete(`http://localhost:3000/employees/${id}`)
        .then((response)=>{
            navigate('/')
        })
        .catch(error=>console.error('data is not delete',error))
    }
   useEffect(()=>
   {
    deleteData();
   },[])
  return (
    <div>
    <p></p>
    </div>
  )
}
