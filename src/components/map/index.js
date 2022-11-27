import {LoadScript, GoogleMap} from '@react-google-maps/api'
import './map.css'

const center={
    lat: -27.601235,
    lng: -48.503915
}

export default function Mapa(){
    return(
       <LoadScript googleMapsApiKey='AIzaSyBysq3KYGJ08ZEsLLlDmt6ffbZ0494cf1E'>
            <div className='map'> 
                <GoogleMap center={center} zoom={15} mapContainerStyle={{width:"100%", height:"100%"}}/>

            </div>
       </LoadScript>
    )
}