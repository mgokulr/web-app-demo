import React from 'react'
import { useName } from '../context/NameContext';

function EditName() {
    const {nameEdit,fieldEditName,deleteName,saveEdit} = useName();
  return (
    <div class="absolute top-0 left-0 h-screen ml-2 mt-20 p-4   shadow-2xl bg-white w-1/2 cursor-pointer rounded-lg">
        <div class="flex flex-col justify-between h-screen">
            <div class="">
                <div class="m-2 p-2 text-teal-700 text-2xl border-b border-gray-200">
                    Edit
                </div>
                {/* Edit Form */}
                <form class="w-full max-w-lg space-y-2 ">
                    <input onChange={(e)=>fieldEditName(e.target.value)} value={nameEdit} class="bg-transparent  w-1/2 text-gray-700 mr-3 py-1 px-2 leading-tight" type="text" placeholder="Enter Your Name"/>
                  </form>
                </div>
                  <div class="mb-28 w-full flex justify-center item-center space-x-12">
                  {/* Delete Call */}
                    <button onClick={()=> deleteName()} class="px-4 rounded-sm text-xl w-24 ">Delete</button>
                    {/* Save edit call */}
                    <button onClick={()=>saveEdit()} class="px-4 bg-teal-700 rounded-sm text-white text-xl w-24 ">Save</button>
                  </div>
        </div>
        </div>
  )
}

export default EditName