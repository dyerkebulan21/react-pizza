import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Categories,PizzaBlock,SortPopup,PizzaBlockLoading} from '../components';
import {setCategory, setSortBy} from '../redux/actions/filters'
import {fetchPizzas} from '../redux/actions/pizzas'
const categoryNames =["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
const sortitems = [{name:"популярности", type:'popular', order: 'desc'}, {name:"цене", type:'price', order: 'desc'}, {name:"aлфавит", type:'name', order: 'asc'}]



export default function Home() {
  
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({filters}) => filters)
  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy,category))
 },[category, sortBy])
  const onSelectCategory = React.useCallback((index) => {
      dispatch(setCategory(index))
  },[])
  
  const onSelectSortBy = React.useCallback((type) => {
    dispatch(setSortBy(type))
  },[])
 


    return (
        <div>
               <div className="container">
          <div className="content__top">
          <Categories activeCategory={category} items={categoryNames} onClickCategory={onSelectCategory}/>
            <SortPopup activeSortType = {sortBy.type} items={sortitems} onClickSortBy = {onSelectSortBy}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {isLoaded ? items.map((obj) => {
            return <PizzaBlock key={obj.id} isLoading={true} {...obj}/> 
          }) : Array(12).fill(0).map((_, index) => <PizzaBlockLoading key={index}/>)}
       
          </div>
        </div>
        </div>
    )
}
