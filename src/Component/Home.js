import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    let [details,setState]=useState([])
    let navigate=useNavigate();

    useEffect(()=>
    {
        let dataForlocal=localStorage.getItem("userInfo");
        setState(JSON.parse(dataForlocal))

    },[])
    const update=()=>
    {
        navigate("/add",)

    }
    const removeItem=(index)=>
    {
        console.log("index",index)
        let updateOne=[...details]
        updateOne.splice(index,1)
        setState(updateOne)
        localStorage.setItem("userInfo",JSON.stringify([...updateOne]))

    }
    const editInfo=(index,item)=>
    {
        //    console.log("index",index)
        //    navigate('/edit',{state:{"index":index,"information":item}})
    }
  return (
    <>
    <button onClick={update}>Click</button>

             <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>email</th>
                                    <th>password</th>
                                    <td>Modify</td>
                                </tr>
                            </thead>
                            {
                              details.length>0 ? details.map((item,index)=>
                                {
                                    let{users}=item
                                    return(
                                        <tbody>
                                        <tr key={index}>
                                            <td>{users.email}</td>
                                            <td>{users.password}</td>
                                            <td>
                                                {/* <button onClick={()=>editInfo(item,index)} className='btn btn-sm btn-danger'>edit</button> */}
                                                <button onClick={()=>removeItem(index)} className='btn btn-sm btn-info m-2'>remove</button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    )
                                }):<h2>Data not found</h2> 
                            }
                            
                        </table>

                    </div>
                </div>
                  
            </div>
    
    </>
  )
}
