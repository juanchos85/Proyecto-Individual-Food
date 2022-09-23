import './App.css';
import Nav from '../src/components/Nav/Nav.jsx';
import { Route} from 'react-router-dom';
import Home from '../src/components/Home/Home.jsx';
import SearchBar from '../src/components/Search/SearchBar.jsx';
import  Card  from '../src/components/Card/Card.jsx';
import CardDetail from '../src/components/CardDetail/CardDetail.jsx'
import Welcome from './components/Welcome/Welcome';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';

function App() {
  return (
    
    <div className="App">

      <h1>Henry Food</h1>
     
      <Nav/>
      <Route exact path="/" componente={Welcome}/>
      <Route exact path = "/home" component={Home}/>
      <Route path = "/SearchBar" component={SearchBar}/>
      <Route path = "/Card" component={Card}/>
      <Route path = "/CardDetail/:id" component={CardDetail}/>
      <Route path = "/CreateRecipe" component={CreateRecipe}/>
      

    </div>
   
  )
}

export default App;
