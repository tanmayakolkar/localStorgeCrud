import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


export default function Edit() {
    let[users,setUsers]=useState({
        email:"",
        password:""
    })
    let navigate=useNavigate();
    let locaion=useLocation()
    // let indexData=locaion.state.index
    // console.log("indexdata",indexData)

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
        
        // let dataForlocal=localStorage.getItem("userInfo") && localStorage.getItem("userInfo").length>0 ?JSON.parse(localStorage.getItem("userInfo"))  :[]
        //  console.log("localstoragedata",dataForlocal)
        // let newOne=dataForlocal.map((data,index)=>
        //       {
             
        //         if(index==indexData)
        //         {
        //            return users
        //         }
        //         else{
        //            return data
        //         }
        //       })
    
         
        // localStorage.setItem("userInfo",JSON.stringify(newOne))
        navigate('/')
    }
  return (
    <div>
         <div className='container'> 
       <div className='row'>
        <div className='col-md-6'>
            <div className='card'>
                <div className='card-header'>

                  <h4>Edit-Form</h4>
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
    </div>
  )
}
