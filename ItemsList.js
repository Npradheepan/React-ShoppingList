import React from 'react'
import ListItems from './ListItems';


const ItemsList = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
    {items.map((item)=>(  
    <ListItems
        key={item.id}
        item={item}
        handleDelete= {handleDelete}
        handleCheck ={handleCheck}
         />)
    )}
</ul>
  )
}

export default ItemsList