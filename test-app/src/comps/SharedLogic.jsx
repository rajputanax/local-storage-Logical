import React from 'react'

const SharedLogic = ({Test2 , deleteButton, item}) => {
    

  
    const toggleBody = ()=>{
    document.body.classList.toggle('test')
    }
  return (
    <div style={{marginBlockEnd:40 , display:'inline-block'}}>
        
     <button onClick={Test2 ? toggleBody :() => deleteButton(item.id)}>SharedLogic</button>
    </div>
  
  )
}

export default SharedLogic;