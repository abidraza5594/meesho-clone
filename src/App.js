
import './App.css';
import Navbar from './components/NavBar/navbar';
import Navigation from './components/Navigation/Navigation';
import LowestPrice from './components/LowestPrice/Lowestprice';
import Catogerice from './components/Catogerice/Catogerice';
import Products from './components/Products/Products';
import Footer from './components/footer/Footer';
import { createContext, useEffect, useState } from 'react';



const Allproducts=createContext()
const loading=createContext()
const LoginContext=createContext()
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([])
  const [loginstate,setLoginState]=useState(true)
    useEffect(() => {
        setIsLoading(true);

        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .then(() => setIsLoading(false))
            
    }, [])

  return (
    <div className="App">
      <loading.Provider value={isLoading}>
      <Allproducts.Provider value={products}>
        <LoginContext.Provider value={loginstate}>
        <Navbar/>
        <Navigation/>
        <LowestPrice/>
        <Catogerice/>
        <Products/>
        <Footer/>
        </LoginContext.Provider>
      </Allproducts.Provider>
      </loading.Provider>

    </div>
  );
}

export default App;
export {loading,Allproducts,LoginContext};