import { useState } from "react";



export default function Geolo(){

    const [lat, setLat] = useState()
    const [lng, setlng] = useState()
    
    if (!navigator.geolocation) {
        alert('Não foi possível obter a sua geolocalização');
        return;
    }

    


    navigator.geolocation.getCurrentPosition(function (position) {

       setLat(position.coords.latitude) 
      setlng(position.coords.longitude)


    });



    return(
        <div>
           <p>{lat}</p>
           <p>{lng}</p>
        </div>
    )
}
