import React from 'react'

import {Categories,PizzaBlock,SortPopup} from '../components';
export default function Home({items}) {

    return (
        <div>
               <div className="container">
          <div className="content__top">
          <Categories items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}/>
            <SortPopup items={[{name:"популярности", type:'popular'}, {name:"цене", type:'price'}, {name:"aлфавит", type:'alphabet'}]}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {items.map((obj) => {
            return <PizzaBlock key={obj.id} {...obj}/>
          })}
          </div>
        </div>
        </div>
    )
}
