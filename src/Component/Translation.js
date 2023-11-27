import React, { useEffect, useState } from 'react';



export default function Translation() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

     let update=(index)=>
     {

      const updatedItems = [...items];
    // Remove the item at the specified index
    updatedItems.splice(index, 1);
    // Update state with the new array
    setItems(updatedItems);
     }
     
    

    return (
    <>
       <h2>Items:</h2>
    
        {items.map((item, index) => (
          <div key={index}>
            
            <button onClick={() => update(index)}>Delete{index}</button>
          </div>
        ))}
      

    </>
  )
}
