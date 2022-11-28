import { useState } from 'react';
import { LoadScript, GoogleMap, Marker, StandaloneSearchBox, InfoWindow } from '@react-google-maps/api'
import './map.css'
import pin from '../../images/iconemap.png'




if (!navigator.geolocation) {
    alert('Não foi possível obter a sua geolocalização');
}


var posicao={} 

navigator.geolocation.getCurrentPosition(function (position) {

    posicao={
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    
//   var lat = position.coords.latitude
//   var lng= position.coords.longitude

  return posicao

});

// const center = {
//     lat: lat,
//     lng: lng
// }




export default function Mapa() {
    const [map, setMap] = useState()
    const [searchBox, setSearchBox] = useState()
    const [places, setPlaces] = useState([])
    const [selectedPlace, setSelectedPlace] = useState()


    const handleOnPlacesChanged = () => {
        const searchBoxPlaces = searchBox.getPlaces()
        const place = searchBoxPlaces[0]
        setSelectedPlace(null)

        const newPlaces = [...places, place]
        setPlaces(newPlaces)

        if (place.geometry && place.geometry.location) {

            map.panTo(place.geometry.location)
        }
    }



    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ""}
            libraries={["places"]}
        >
            <div className='map'>
                <GoogleMap
                    onLoad={setMap}
                    center={posicao}  zoom={16} mapContainerStyle={{ width: "100%", height: "100%" }}>
                        
                       
                   
                    <div className='search-box-container'>
                        <div className='search-box-layer'>
                            <StandaloneSearchBox onLoad={setSearchBox} onPlacesChanged={handleOnPlacesChanged}>
                                <input type="text" className='search-box-input' />
                            </StandaloneSearchBox>
                        </div>
                    </div>

                    {places.map((place, index) => (
                        <>
                            {place.geometry && place.geometry.location ? (
                               
                                <Marker key={index} position={place.geometry.location} onClick={() => setSelectedPlace(place)} icon={pin}>

                                    {selectedPlace && selectedPlace === place? (<InfoWindow key={`info-window-${index}`} onCloseClick={() => setSelectedPlace(null)}>
                                        <div>
                                            <h1>InfoWindow</h1>
                                            <p>{selectedPlace.formatted_address}</p>
                                        </div>
                                    </InfoWindow>) : null}
                                </Marker>) : null}





                        </>

                    ))}

                </GoogleMap>

            </div>
        </LoadScript>
    )
}