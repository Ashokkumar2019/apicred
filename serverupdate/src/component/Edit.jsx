import React,{useEffect,useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';


export default function Edit() {
  const [errortype,setErrortype]=useState({})
    const {eid}=useParams();
    const navigate=useNavigate();
    const inputValue={
      id:"",
     name:"",
     designation:"",
     salary:""
  }
  const [newvalue,setNewvalue]=useState(inputValue)
  const{id,name,designation,salary}=newvalue;
    const dataGet=()=>{
        axios.get(`http://localhost:3000/employees/${eid}`)
        .then(response=>{
       console.log(response.data)
       setNewvalue(response.data)
          
        })
        .catch(error=>console.error('error',error))
    }
    

  useEffect(()=>{
    dataGet();
  },[])
  const updateNewData=()=>{
    
  }
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
  await axios.put(`http://localhost:3000/employees/${eid}`, {name,designation,salary})
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
        <label htmlFor="id">Emp id :</label><input type="text" name="id" value={id} onChange={newVal} readOnly/><br />
        <span style={{ color: 'red', fontSize:'12px'}}>{errortype.idErr}</span> <br />
        <label htmlFor="name">Name : </label><input type="text" name='name' value={name} onChange={newVal} />
        <br /><span style={{ color: 'red', fontSize:'12px'}}>{errortype.nameErr}</span><br />
      <label htmlFor="designation">Designation :</label><input type="text" name='designation' value={designation} onChange={newVal} />
      <br /><span style={{ color: 'red', fontSize:'12px'}}>{errortype.desErr}</span><br />
      <label htmlFor="salary">Salary :</label><input type="text" name='salary' value={salary} onChange={newVal}/>
      <br /><span style={{ color: 'red', fontSize:'12px'}}>{errortype.salErr}</span><br />
      <label htmlFor=""></label><input type="submit" value="Update Data" />
      </form>
    </div>
  )
}
