import {NavLink,Link,Routes,Route,BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'
import Navbar from './Navbar.jsx'
import Landingpage from './Landingpage.jsx'
import Products from './Products.jsx'
import About from './About.jsx'
import ProductPage from './ProductPage.jsx'
import CartPage from './CartPage.jsx'
import LoginPage from './LoginPage.jsx'
import ContactPage from './ContactPage.jsx'
import Footer from './Footer.jsx'

function App() {

  return (
    <div className="bg-dark-subtle">
      <BrowserRouter basename='/react-project'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landingpage/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path="/Product/:id" element={<ProductPage/>}/>
          <Route path="/Cart" element={<CartPage />} />
          <Route path="/Login" element={<LoginPage/>}/>
          <Route path="/Contact" element={<ContactPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
