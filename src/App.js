import {BrowserRouter,Route,Routes,} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LogIn  from './components/LogIn';
import Products from './components/Products'
import Cart from './components/Cart';
import Notfound from './components/Notfound';

const App = () => <> <BrowserRouter>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/login" element={<LogIn/>} />
<Route path="/products" element={<Products/>} />
<Route path="/cart" element={<Cart/>} />
<Route path="*" element={<Notfound/>} />
</Routes>
</BrowserRouter>
</>


export default App;
