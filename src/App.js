import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import ProtectedRoute1 from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import Experiment from './components/Experiment'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute1 exact path="/" component={Home} />
      <ProtectedRoute1 exact path="/products" component={Products} />
      <Experiment />
      <ProtectedRoute1 exact path="/cart" component={Cart} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
