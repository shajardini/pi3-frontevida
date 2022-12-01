import { useState} from "react"
import SearchBox from '../searchBox';

type PoiBoxProps = {
    onPlaceSelected: (place: google.maps.places.PlaceResult) => void;
}


export default function POIbox({onPlaceSelected}: PoiBoxProps) {
    const [searchBox, setSearchBox] = useState()

    const handleOnPlacesChanged = () => {
        const searchBoxPlaces = searchBox.getPlaces()
        const place = searchBoxPlaces[0]
        if (place.geometry && place.geometry.location) {
            onPlaceSelected(place)
        }
    }
    return (<>
        <SearchBox onLoad={setSearchBox}
            onPlacesChanged={handleOnPlacesChanged} />


    </>

    )
}