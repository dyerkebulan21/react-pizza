import React from 'react'

const Categories = React.memo(function Categories({items,onClickItem}) {
  const [activeItems,setActiveItems] = React.useState(null)
  const onSelectedItems = (index) => {
      setActiveItems(index)
      onClickItem(index)
  }
  return (
  
          <div className="categories">
            <ul>
              <li className={activeItems === null ? 'active' : ''}  onClick={() => setActiveItems(null)}>Все</li>
            {
             items && items.map((item,index) => {
             return  <li className={activeItems === index ? 'active' : ''}  onClick={() => onSelectedItems(index)} key={`${item}_${index}`}>{item}</li>
             })   
            } 
            
            </ul>
          </div>
  
  )
})

export default Categories
