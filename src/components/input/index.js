import './input.css'

type InputProps={
  placeholder: String
}

export default function Input({placeholder}:InputProps){

  return <input type="text" className='my-input' placeholder={placeholder}/>
}