import { useState, useEffect} from "react"
import SearchBox from '../searchBox';
import Input from '../input'
import './poi.css'
import {useForm} from 'react-hook-form'

type PoiBoxProps = {
    onPlaceSelected: (place: google.maps.places.PlaceResult) => void;
    onPoiSaved: () => void;
}


export default function POIbox({onPlaceSelected, onPoiSaved}: PoiBoxProps) {
    const [searchBox, setSearchBox] = useState()
    const {register, handleSubmit, setValue}=useForm()

    const handleOnPlacesChanged = () => {
        const searchBoxPlaces = searchBox.getPlaces()
        const place = searchBoxPlaces[0]
        if (place.geometry && place.geometry.location) {
            onPlaceSelected(place);
            setValue("address", place.formatted_address || "")
            setValue("lat", place.geometry.location.lat())
            setValue("lng", place.geometry.location.lng())
           
            
        }
    }

    const save = (data:any) =>{
        console.log(data)
        fetch("https://bancoevida.herokuapp.com/",{
            headers:{
                "Content-Type": "application/json",

            },
            method: "POST", 
            body: JSON.stringify(data)
        }).then(async(response)=>{
                const json = await response.json()
                if(response.ok){
                    setValue("address", "")
                    setValue("name", "")
                    setValue("description", "")
                    onPoiSaved()
                }else{
                    console.log("Erro",json.message)
                }
            })
        }
    
        useEffect(()=>{
            register("lat")
            register("lng")
    
        },[register])
    return (
    
    <form onSubmit={handleSubmit(save)}>
        <SearchBox onLoad={setSearchBox}
            onPlacesChanged={handleOnPlacesChanged} 
            register={register} name="address"/>

       
        <Input placeholder="Nome" register={register} name="name"/>
        <Input placeholder="Descrição" register={register} name="description"/>
        <button className="button-poi-save" type="submit">Salvar</button>
       
    </form>

    )
    }