import { StandaloneSearchBox } from '@react-google-maps/api'
import Input from '../input';

type SearchBoxProps = {
    onLoad: (SearchBox: google.maps.places.SearchBox) => void;
    onPlacesChanged: () => void;
}

export default function SearchBox({onLoad, onPlacesChanged}:SearchBoxProps) {
    return (
        <StandaloneSearchBox 
        onLoad={onLoad} 
        onPlacesChanged={onPlacesChanged}>
            <Input/>
        </StandaloneSearchBox>
    )
}