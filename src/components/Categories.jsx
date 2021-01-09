import React from 'react'

const Categories = React.memo(function Categories({activeCategory,items,onClickItem}) {
  
  const onSelectedItems = (index) => {
      onClickItem(index)
  }
  return (
  
          <div className="categories">
            <ul>
              <li className={activeCategory === null ? 'active' : ''}  onClick={() => onSelectedItems(null)}>Все</li>
            {
             items && items.map((item,index) => {
             return  <li className={activeCategory === index ? 'active' : ''}  onClick={() => onSelectedItems(index)} key={`${item}_${index}`}>{item}</li>
             })   
            } 
            
            </ul>
          </div>
  
  )
})

export default Categories
