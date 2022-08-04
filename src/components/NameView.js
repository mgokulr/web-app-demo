import React from 'react';
import { useName } from '../context/NameContext'

function NameView() 
{
  //Consuming values from context(NameContext) //
    const{name,nameList}  =useName();
  return (
          <div class="w-1/2 h-full m-8 bg-slate-100">
          <h1 className='p-2'>{name}</h1>
          <ul className='p-5'>
             {/* Listing items in array 'nameList' */}
            {(nameList.length>0)?nameList.map((item,index)=>(<li key={index}>{item}</li>)):<></>}
          </ul>
          </div>
  )
}

export default NameView