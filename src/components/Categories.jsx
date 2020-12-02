import React from 'react'

// export default class Categories extends React.Component {
//     state = {
//         activeItem: null,
//     };
//     onSelectedItem = (index) => {
//         this.setState({
//             activeItem: index,
//         })
//     }
//     render() {
//         const {onClickItem, items} = this.props
//         return (
//                 <div className="categories">
//               <ul>
//                 <li className="active">Все</li>
//               {
//                items.map((item,index) => {
//                return  <li className={this.state.activeItem === index ? 'active' : ''}  onClick={() => this.onSelectedItem(index)} key={`${item}_${index}`} >{item}</li>
//                })   
//               } 
//               </ul>
//             </div>
//         )
//     }
// }



function Categories({items,onClickItem}) {
    const [activeItems,setActiveItems] = React.useState(null)

    const onSelectedItems = (index) => {
        setActiveItems(index)
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
}

export default Categories
