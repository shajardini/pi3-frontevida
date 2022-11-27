import './header.css'
import {Link} from 'react-router-dom'
import Imagem from './logo_evida.png'

function Header() {
    return (
        <header>
            <Link className='logo' to='/'><img src={Imagem}></img></Link>
            <div className='menu'>
            <Link  to='/'>Home</Link>
            <Link  to='/quempodedoar'>Quem pode doar?</Link>
            <Link  to='/proximidade'>Hemocentros próximos</Link>
            </div>
        </header>
    )
}

export default Header