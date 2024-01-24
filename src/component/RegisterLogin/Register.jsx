import {  useState } from "react";
import axios from "axios";
function Register() {
  
    const [employeename, setEmployeename] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function save(event) {
        // event.preventDefault();
const emp={employeename,email,password}

        // try {
        //   await axios.post("http://localhost:8040/api/v1/employee/save", {
        //   employeename: employeename,
        //   email: email,
        //   password: password,
        //   });
        //   alert("Employee Registation Successfully");
        // } catch (err) {
        //   alert(err);
        // }

        fetch("http://localhost:8040/api/v1/employee/save", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(emp)
        }).then(()=>{
            console.log("Record Added")
        })






      }
  
    return (
    <div>
    <div class="container mt-4" >
    <div class="card">
            <h1>Student Registation</h1>
    
    <form>
        <div class="form-group">
          <label>Employee name</label>
          <input type="text"  class="form-control" id="employeename" placeholder="Enter Name"
          
          value={employeename}
          onChange={(event) => {
            setEmployeename(event.target.value);
          }}
          />
        </div>
        <div class="form-group">
          <label>email</label>
          <input type="email"  class="form-control" id="email" placeholder="Enter Email"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
 
        </div>
        <div class="form-group">
            <label>password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>
        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
       
      </form>
    </div>
    </div>
     </div>
    );
  }
  
  export default Register;