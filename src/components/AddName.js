import React from 'react'
import { useName } from '../context/NameContext';
import EditName from './EditName';

function AddName() 
{
  const {name,fieldName,addValue,nameList,deleteName,editName,editModal} = useName();
  return (
       <div onSubmit={(e)=>addValue(e)} class="relative w-full items-center  p-8">
            <h1 class="m-8">Name App</h1>
            <form class="flex mb-12">
                <input onChange={(e)=> fieldName(e.target.value)} value={name} class="bg-transparent  w-fit text-gray-700 mr-3 py-1 px-2 leading-tight" type="text" placeholder="Enter Your Name"/>
                <button class="bg-slate-700 p-2 py-1">
                   Add
                </button>
            </form>
            <div className='flex flex-col'>
              {
                (nameList.length>0)?nameList.map((item,index)=>
                (
                 <div key={index} className='flex space-x-2  '>
                   <p>{item}</p>
                    <button onClick={()=>editName(index)}>Edit</button>
                 </div>
                )
                ):<></>
              }
            </div>
            {/* render modal(window) component conditionally */}
            {(editModal)?<EditName/>:<></>}
        </div>
  )
}

export default AddName; 