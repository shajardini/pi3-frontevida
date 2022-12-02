import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Header from './components/header'
import Footer from './components/footer'
import QuemPode from './pages/quempode'
import Localiza from './pages/localiza'
import Links from './components/links'


export default function RouteApp(){
    return(
        <BrowserRouter> 
        <Header/>
       
        
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/quempodedoar' element={<QuemPode/>}/>
                <Route path='/proximidade' element={<Localiza/>}/>
            </Routes>
            <Links/>
            <Footer/>
        </BrowserRouter>
    )
}