import React from 'react'
import PropTypes from 'prop-types'
const Categories = React.memo(function Categories({activeCategory,items,onClickCategory}) {
  console.log(activeCategory)

  return (
  
          <div className="categories">
            <ul>
              <li className={activeCategory === null ? 'active' : ''}  onClick={() => onClickCategory(null)}>Все</li>
            {
             items && items.map((item,index) => {
              
             return  <li className={activeCategory === index ? 'active' : ''}  onClick={() =>  onClickCategory(index) } key={`${item}_${index}`}>{item}</li>
             })   
            } 
            
            </ul>
          </div>
  
  )
})
Categories.propTypes = {
  //activeCategory: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func

}

Categories.defaultProps = {activeCategory: null, items: []}

export default Categories
