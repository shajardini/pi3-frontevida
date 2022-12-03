import { StandaloneSearchBox } from '@react-google-maps/api'
import Input from '../input';
import {FieldValues, UseFormRegister} from 'react-hook-form'


type SearchBoxProps = {
    onLoad: (SearchBox: google.maps.places.SearchBox) => void;
    onPlacesChanged: () => void;
    register: UseFormRegister<FieldValues>;
    name: string;
}

export default function SearchBox({onLoad, onPlacesChanged, register, name}:SearchBoxProps) {
    return (
        
        <StandaloneSearchBox 
        onLoad={onLoad} 
        onPlacesChanged={onPlacesChanged}>
           <Input register={register} name={name}/>
        </StandaloneSearchBox>
        
    )
}