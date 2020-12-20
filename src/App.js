import React from 'react';
import { Route } from 'react-router-dom';
import {Header} from './components';
import axios from 'axios'
import {Home, Cart} from './pages'
import './scss/app.scss';
import {setPizzas} from './redux/actions/pizzas'
import {connect} from 'react-redux'
import store from './redux/store';
// function App() {
//   const[pizzas, setPizzas] = React.useState([]);
//   React.useEffect(() => {
//   
//   },[])
//   return (
 
//   );
// }

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
          this.props.setPizzas(data.pizzas)
          })
  }
  render() {
    return(
    <div className="wrapper">
    <Header />
    <div className="content">
      <Route path="/"   render={()=> <Home items={this.props.items}/>} exact/>
      <Route path="/cart"   component={Cart} exact/>
    </div>
  </div>
  )
  }
}

const mapStateToProps = state => {
  return {
    items: state.pizzas.items,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
