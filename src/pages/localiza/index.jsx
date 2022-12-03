import Mapa from "../../components/map"
import './localiza.css'



export default function Localiza(){
    return (
        <div className="container-localiza">
            <h1>Locais na proximidade</h1>
            
            <Mapa/>
           
        </div>
    )
} ;