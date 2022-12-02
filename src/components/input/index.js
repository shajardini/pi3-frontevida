import './input.css'
import {FieldValues, UseFormRegister} from 'react-hook-form'


type InputProps = {
  placeholder: String,
  name: String,
  register?: UseFormRegister<FieldValues>
  
}

export default function Input({placeholder,register, name}:InputProps){
  const additionalProps = register && name ? {...register(name)}:{}

  return( <input type="text" className='my-input' placeholder={placeholder} {...additionalProps} />)
}