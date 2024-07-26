import './App.css'
import Footer from './components/Footer'
import NavBar from './components/Navbar'
import AllGames from './routes/AllGames'
import Home from './routes/Home'
import Account  from './routes/Account'
import { Route, Routes } from 'react-router-dom'
import SingleGame from './routes/SingleGame'
import AddGame from './routes/AddGame'

function App() {


  return (
    <>
      <NavBar/>

      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/" element={<AllGames/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/games/:id" element={<SingleGame/>}/>
        {/* <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/newproduct" element={<AddProduct/>}/>
        <Route path='/checkout' element={<Checkout/>}/> */}
      </Routes>

      <Footer/>
    </>
  )
}

export default App