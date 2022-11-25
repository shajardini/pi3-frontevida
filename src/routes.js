import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Header from './components/header'
import Footer from './components/footer'
import Libras from './components/libras/Libras'


export default function RouteApp(){
    return(
        <BrowserRouter> 
        <Header/>
        <Libras/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}