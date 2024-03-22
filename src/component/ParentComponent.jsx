import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const [dataFromChild,setDataFromChild]=useState(null)
  
    const handelDataFromChild=(data)=>{
   console.log("data received",data)
   setDataFromChild(data)
    }
  
    return (
    <div>
    <h1>Parent Component</h1>
    <p>Data from Child:{dataFromChild}</p>
      <ChildComponent sendDataToParent={handelDataFromChild}/> 
    </div>
  )
}

export default ParentComponent
