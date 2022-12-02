import { useState} from "react"
import SearchBox from '../searchBox';
import Input from '../input'
import './poi.css'
import {useForm} from 'react-hook-form'

type PoiBoxProps = {
    onPlaceSelected: (place: google.maps.places.PlaceResult) => void;
}


export default function POIbox({onPlaceSelected}: PoiBoxProps) {
    const [searchBox, setSearchBox] = useState()
    const {register, handleSubmit, setValue }=useForm()

    const handleOnPlacesChanged = () => {
        const searchBoxPlaces = searchBox.getPlaces()
        const place = searchBoxPlaces[0]
        if (place.geometry && place.geometry.location) {
            onPlaceSelected(place);
            setValue("address", place.formatted_address || "")
        }
    }

    const save = (data) =>{
        console.log(data)
    }
    return (
    
    <form onSubmit={handleSubmit(save)}>
        <SearchBox onLoad={setSearchBox}
            onPlacesChanged={handleOnPlacesChanged} 
            register={register} name="address"/>

       
        <Input placeholder="Nome"register={register} name="name"/>
        <Input placeholder="Descrição" register={register} name="description"/>
        <button className="button-poi-save" type="submit">Salvar</button>
       
    </form>

    )
}