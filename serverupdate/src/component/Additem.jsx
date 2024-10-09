import React,{useState} from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Additem() {
    const navigate=useNavigate();
    const [errortype,setErrortype]=useState({})
    const inputValue={
        id:"",
       name:"",
       designation:"",
       salary:""
    }
    const [newvalue,setNewvalue]=useState(inputValue)
    const{id,name,designation,salary}=newvalue;
    const newVal=(e)=>{
        const {name,value}=e.target;
        // console.log(e.target.name);
        // console.log(e.target.name);
        setNewvalue({...newvalue,[name]:value})
    }
    const updateVal=async(e)=>{
        e.preventDefault();
        // console.log(id,name,designation,salary);
        errShow();
        try{
            await axios.post(`http://localhost:3000/employees`, newvalue)
            navigate("/");
          }
          catch(error)
          {
            console.error('error',error)
          }

    }
    const errShow=()=>{
        const err={};
        if(id===''){
            err.idErr="Please enter the emp id"
        }
       else if(name===''){
            err.nameErr="Please enter Emp Name"
        } else if(designation===''){
            err.desErr="Please enter Emp Designation"
        }else if(salary===''){
            err.salErr="please enter Emp salary"
        } 
        setErrortype(err)
    }

  return (
    <div>
      <form action="" onSubmit={updateVal}>
        <label htmlFor="id">Emp id :</label><input type="text" name="id" value={id} onChange={newVal}/><br />
        <span style={{ color: 'red', fontSize:'12px'}}>{errortype.idErr}</span> <br />
        <label htmlFor="name">Name : </label><input type="text" name='name' value={name} onChange={newVal} />
        <br /><span style={{ color: 'red', fontSize:'12px'}}>{errortype.nameErr}</span><br />
      <label htmlFor="designation">Designation :</label><input type="text" name='designation' value={designation} onChange={newVal} />
      <br /><span style={{ color: 'red', fontSize:'12px'}}>{errortype.desErr}</span><br />
      <label htmlFor="salary">Salary :</label><input type="text" name='salary' value={salary} onChange={newVal}/>
      <br /><span style={{ color: 'red', fontSize:'12px'}}>{errortype.salErr}</span><br />
      <label htmlFor=""></label><input type="submit" value="Add Data" />
      </form>
    
    </div>
  )
}
