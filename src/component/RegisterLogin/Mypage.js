import React, { useEffect, useState } from 'react'
import "./Mypage.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Mypage = () => {

    const [name,setName]=useState("")
    const [dept,setDept]=useState("")
    const [data,setData]=useState([])

    const handleclick=(e)=>{
        e.preventDefault()
        const student={name,dept}
        console.log(student)
        fetch("http://localhost:8040/student/add", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=>{
            console.log("Record Added")
        })


    }

    useEffect(() => {
        fetch('http://localhost:8040/student/getAll')
          .then((res) => {
            return res.json();
          })
          .then((result) => {
            console.log(result);
            setData(result);
          });
      }, []);



  return (
    <div className='container'>

        <div>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined"
       value={name} onChange={(e)=>setName(e.target.value)} />

       <br/>
    

      <TextField id="outlined-basic" label="Dept" variant="outlined"
       value={dept} onChange={(e)=>setDept(e.target.value)} />
      </Box>

      <Button onClick={handleclick} variant="contained">Save</Button>
      <br/>
      <br/>
      <div className='showContainer'>
        <div>
        { data.map((dta)=>
            <h2>
                {` ${dta.id}.`}&nbsp;
                {dta.name}&nbsp;
                {dta.dept}&nbsp;
            </h2>  
        )}
        </div>
        </div>
    </div>

    </div>
  )
  
}

export default Mypage
