import React,{ useContext,useState } from "react";

const NameContext = React.createContext();

export const useName = ()=>{
    return useContext(NameContext);
   }
   
   export const NameProvider = ({children})=>{

    //State for form field name//
    const [name, setName] = useState();

    //State maintaining an array list of names
    const [nameList, setNameList] = useState([]);

    //State for form edit field name and index
    const [nameEdit, setNameEdit] = useState();
    const [editIndex, setEditIndex] = useState();



    //To change state name on event change//
    const fieldName =(nameValue)=>{
      return setName(nameValue);
    }

    //To change state name on event change//
    const fieldEditName =(nameValue)=>{
      return setNameEdit(nameValue);
    }

    //States for modal window.
    //Rendering a component conditionally
    const [editModal, setEditModal] = useState(false);

    function toggleEditModal(){
      return (editModal)?setEditModal(false):setEditModal(true);
    }

      //Adding value to nameList//
    const addValue=(e)=>
    {
        e.preventDefault();
        setNameList([...nameList,name]);
        return setName('');
    }

     const deleteName =()=>{
      toggleEditModal();
      return nameList.splice(editIndex,1);
     } 

    //  To fetch name to be edited and set it as nameEdit state
     const editName =(index)=>{
       toggleEditModal();
       setNameEdit(nameList[index]);
       setEditIndex(index);
     }

    //  To save edited name
     const saveEdit =()=>{
      toggleEditModal();
      return nameList[editIndex]= nameEdit;

     } 

    //Data and methods  
    const value = {
      name,nameEdit,nameList,editModal,fieldName,addValue,deleteName,editName,toggleEditModal,fieldEditName,saveEdit
     }

      return(
        <NameContext.Provider value={value}>
            {children}
        </NameContext.Provider>

      )
}
