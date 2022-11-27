// import GoogleMapReact from "google-map-react";


// import './map.css'

// function Map (){
//     return(
//         <div className="container-map">
//             <GoogleMapReact
//                 bootstrapURLKeys={{key: 'AIzaSyBZPzhI5TlSbMqgrksE7GeGY6ewaOvzxRI'}}
//                 defaultCenter={{
//                     lat: -23.561684,
//                     lng: -46.625378
//                 }}
//                 defaultZoom={15}
//             >

//             </GoogleMapReact>
//         </div>
//     )
// }

// export default Map;

import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBysq3KYGJ08ZEsLLlDmt6ffbZ0494cf1E" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}