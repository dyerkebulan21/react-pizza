import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Categories,PizzaBlock,SortPopup} from '../components';
import {setCategory} from '../redux/actions/filters'
const categoryNames =["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
const sortitems = [{name:"популярности", type:'popular'}, {name:"цене", type:'price'}, {name:"aлфавит", type:'alphabet'}]
export default function Home() {
  
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);
  const onSelectCategory = React.useCallback((index) => {
      dispatch(setCategory(index))
  },[])
  
    return (
        <div>
               <div className="container">
          <div className="content__top">
          <Categories items={categoryNames} onClickItem={onSelectCategory}/>
            <SortPopup items={sortitems}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {items && items.map((obj) => {
            return <PizzaBlock key={obj.id} {...obj}/>
          })}
          </div>
        </div>
        </div>
    )
}
