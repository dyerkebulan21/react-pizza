import React from 'react';
import { Route } from 'react-router-dom';
import {Header} from './components';
import axios from 'axios'
import {Home, Cart} from './pages'
import './scss/app.scss';
import {setPizzas} from './redux/actions/pizzas'
import {connect} from 'react-redux'
import store from './redux/store';
import {useDispatch, } from 'react-redux'
function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
      axios.get("http://localhost:3001/pizzas").then(({data}) => {
            dispatch(setPizzas(data))
          })
  },[])
  return (
     <div className="wrapper">
    <Header />
    <div className="content">
      <Route path="/"   component={Home} exact/>
      <Route path="/cart"   component={Cart} exact/>
    </div>
    </div>
  );
}

// class App extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({data}) => {
//           this.props.setPizzas(data.pizzas)
//           })
//   }
//   render() {
//     return(
//     <div className="wrapper">
//     <Header />
//     <div className="content">
//       <Route path="/"   render={()=> <Home items={this.props.items}/>} exact/>
//       <Route path="/cart"   component={Cart} exact/>
//     </div>
//   </div>
//   )
//   }
// }
export default App;
// const mapStateToProps = state => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items))
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(App);
