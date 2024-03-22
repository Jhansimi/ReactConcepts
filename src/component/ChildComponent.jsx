import React from 'react'

const ChildComponent = ({sendDataToParent}) => {
  
  const sendData=()=>{
    const data="Hello From Child"
    sendDataToParent(data)

  }
  
    return (
    <div>
    <h2>Child Component</h2>
    <button onClick={sendData} style={{color:"white",background:"red",border:"none",padding:"10px",borderRadius:"4px"}}>Send data to Parent</button>
      
    </div>
  )
}

export default ChildComponent
