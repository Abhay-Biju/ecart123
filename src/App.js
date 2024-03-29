
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Wishlist from './Pages/Wishlist';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <h1></h1>
      <Header/>

      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/wishlist'element={<Wishlist/>}/>

      </Routes>
      

    
    <Footer/>
    </div>
  );
}

export default App;
