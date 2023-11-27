import React, { useState } from 'react'
import { json } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



export default function Add() {
    let[users,setUsers]=useState({
        email:"",
        password:""
    })
    let navigate=useNavigate();

    const update=(e)=>
    {
     setUsers(
        {
            ...users,
            [e.target.name]:e.target.value
        }
     )
    }
    const submitForm=(e)=>
    {
        e.preventDefault()
       let dataForlocal=localStorage.getItem("userInfo") && localStorage.getItem("userInfo").length>0 ?JSON.parse(localStorage.getItem("userInfo"))  :[]
        localStorage.setItem("userInfo",JSON.stringify([...dataForlocal,{users}]))
        navigate("/")
        
    }
  return (
    <>
       <div className='container'> 
       <div className='row'>
        <div className='col-md-6'>
            <div className='card'>
                <div className='card-header'>

                  <h4>Add-Form</h4>
                </div>
                <div className='card-body'>
                    <form onSubmit={submitForm}>
                        <div className='form-group mt-2'>
                            <input onChange={update} value={users.email} name="email" type="text" className='form-control' placeholder='email'/>
                        </div>
                        <div className='form-group mt-2'>
                            <input onChange={update} value={users.password} name="password" type="password" className='form-control' placeholder='password'/>
                        </div>
                        <div className='form-group mt-2'>
                            <input type='submit' value="submit"/>
                           
                        </div>
                    </form>

                </div>

            </div>

        </div>

       </div>

       </div>
    
    </>
  )
}
