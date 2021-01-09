import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Categories,PizzaBlock,SortPopup,PizzaBlockLoading} from '../components';
import {setCategory} from '../redux/actions/filters'
import {fetchPizzas} from '../redux/actions/pizzas'




const categoryNames =["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
const sortitems = [{name:"популярности", type:'popular'}, {name:"цене", type:'price'}, {name:"aлфавит", type:'alphabet'}]



export default function Home() {
  
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({filters}) => filters)
  const onSelectCategory = React.useCallback((index) => {
      dispatch(setCategory(index))
  },[])
  React.useEffect(() => {
     dispatch(fetchPizzas())
  },[])
 


    return (
        <div>
               <div className="container">
          <div className="content__top">
          <Categories activeCategory={category} items={categoryNames} onClickItem={onSelectCategory}/>
            <SortPopup items={sortitems}/>
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
