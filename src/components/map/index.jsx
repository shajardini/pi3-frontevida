import { useEffect, useState } from 'react';
import { LoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api'
import './map.css'
import pin from '../../images/iconemap.png'
import SearchBox from '../searchBox';
import POIbox from '../PoiBox';
import { json } from 'react-router-dom';




if (!navigator.geolocation) {
    alert('Não foi possível obter a sua geolocalização');
}


var posicao={
    lat: -23.5113,
    lng: -46.8768
} 

// navigator.geolocation.getCurrentPosition(function (position) {

//     posicao={
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//     }
    
// //   var lat = position.coords.latitude
// //   var lng= position.coords.longitude

//   return posicao

// });

// const center = {
//     lat: lat,
//     lng: lng
// }

const TABS ={
    search: 0,
    poi: 1
}


export default function Mapa() {
    const [map, setMap] = useState()
    const [searchBox, setSearchBox] = useState()
    const [places, setPlaces] = useState([])
    const [selectedPlace, setSelectedPlace] = useState()
    const [activetab, setActiveTab] = useState(TABS.search)

    const [pois, setPois] = useState([])
    const [poiSelected, setPoiSelected] = useState()

    const handleOnPlacesChanged = () => {
        const searchBoxPlaces = searchBox.getPlaces()
        const place = searchBoxPlaces[0]
        setSelectedPlace(null)

        const newPlaces = [...places, place]
        setPlaces(newPlaces)
        mapPanTo(place)
    }


    const mapPanTo = (place: google.maps.places.PlaceResult)=>{
        if (place.geometry && place.geometry.location) {

            map.panTo(place.geometry.location)
        }
    }

    const updatePois = ()=>{
        fetch("http://localhost:3001/v1/poi",{
            headers:{
                "Content-Type": "application/json",

            },
            method: "GET", 
            }).then(async(response)=>{
                const json = await response.json()
                if(response.ok){
                    console.log(json.pois)
                   setPois(json.pois)
                }else{
                    console.log("Erro",json.message)
                }
            })
    }

   
    useEffect(()=>{
        updatePois();
    },[])

    return (
        
        <><LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ""}
            libraries={["places"]}
        >
            <div className='map'>
                <GoogleMap
                    onLoad={setMap}
                    center={posicao}  zoom={10} mapContainerStyle={{ width: "100%", height: "100%" }}>
                        
                       
                   
                    <div className='search-box-container'>
                        <div className='search-box-layer'>
                            <nav>
                                <button className={activetab === TABS.search? "active" : ""} onClick={()=> setActiveTab(TABS.search)}>Busca</button>
                                {/* <button className={activetab === TABS.poi? "active" : ""} onClick={()=> setActiveTab(TABS.poi)}>POI</button> */}
                            </nav>
                            {activetab === TABS.search? <SearchBox onLoad={setSearchBox} 
                            onPlacesChanged={handleOnPlacesChanged}/>: activetab === TABS.poi ? <POIbox onPlaceSelected={(place)=> mapPanTo(place)} onPoiSaved={updatePois}/> : null}
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
                {pois.map((poi, index)=>(
                    <Marker key={index} position={{lat: poi.lat, lng: poi.lng}} onClick={() => setPoiSelected(poi)} icon={pin}>
                        {poiSelected && poiSelected === poi? (<InfoWindow key={`info-window-${index}`} onCloseClick={() => setSelectedPlace(null)}>
                                        <div>
                                            <h1>{poiSelected.name}</h1>
                                            <div><strong>Endereço:</strong>{poiSelected.address}</div>
                                            <div><strong>Nome:</strong>{poiSelected.name}</div>
                                            <div><strong>Descrição:</strong>{poiSelected.description}</div>
                                        </div>
                                    </InfoWindow>) : null}
                    </Marker>
                ))}
                </GoogleMap>

            </div>
        </LoadScript>
        <div className='container-locais'>
            <h2>Locais</h2>
            <div className ='container-dados'>
            {pois.map(
                (local)=>{
                    return (
                        <div className="locais">
                            <p className='destaque'><strong>{local.name}</strong></p>
                            <p><strong>Endereço:</strong>{local.address}</p>
                            <p><strong>Horário:</strong>{local.description}</p>

                        </div>
                )
            })}
            </div>
        </div>

        </>
    )
}