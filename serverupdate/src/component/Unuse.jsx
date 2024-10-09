import React,{useState} from 'react'

const Htmlpage = () => {
  // const [email, setemail] = useState("");
  // const [password, setPassword] = useState("");
  const initalvalue={
    email:'',
    password:'',
    mobile:''
  }
  const [state,setState]=useState(
  initalvalue
  )
  const {email,password,mobile}=state;
const [Formerror,setFormerror]=useState({});
const handleChange=(e)=>{
  // console.log(e.target);
  // console.log(e.target.name);
  // console.log(e.target.value);
  const {name,value}=e.target;
  setState({
    ...state,
    [name]:value
  })
}

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(email,password,mobile);
    //validation:--
    Validate();
  }
  const Validate=()=>{
    // console.log(email,password,mobile);
    const err={};
    const regexmail=/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;
    if(email===''){
   err.erremail='*please fill your email'
    }
    else if(!(regexmail.test(email))){
      err.erremail="*please fill acording to email format"; 
    }
    else if(mobile===''){
    err.errmobile='*please fill your mobileno'
    }
    // console.log(err);
    setFormerror(err);
    
  }
  return (
    <div >
     
     
     
     <form onSubmit={submitHandler}>

  <div data-mdb-input-init className="form-outline mb-4">
    <input type="text" id="form2Example1" className="form-control"   name="email"
                    value={email} 
                    
                    onChange={handleChange}/>
    <label className="form-label" htmlFor="form2Example1">Email address</label>
  <span style={{color:'red'}}>{Formerror.erremail}</span>
  </div>


  <div data-mdb-input-init className="form-outline mb-4">
    <input type="text" id="form2Example1" className="form-control"   name="mobile"
                    value={mobile} 
                    
                    onChange={handleChange}/>
    <label className="form-label" htmlFor="form2Example1">mobileno</label>
    <span style={{color:'red'}}>{Formerror.errmobile}</span>
  </div>
 
  <div data-mdb-input-init className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" 
    
    name="password"
    value={password} 
                    
    onChange={handleChange
  }/>
    <label className="form-label" htmlFor="form2Example2">Password</label>
  </div>

  
  

    

 
  <button  type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>

  <div className="text-center">
    

    <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
      <i className="fab fa-google"></i>
    </button>

    <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
      <i className="fab fa-twitter"></i>
    </button>

    <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
      <i className="fab fa-github"></i>
    </button>
  </div>
</form>

    </div>
  )
}

export default Htmlpage