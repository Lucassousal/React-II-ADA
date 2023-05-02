import { useState } from 'react'
import { IRegisterData, IRegisterProps } from '../types/Register.types'
import * as C from './Register.styles'
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterView:React.FC<IRegisterProps> = ({onSubmit}) => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState<IRegisterData>({
    name:'',
    email:'',
    age:'',
  })

  const validateName = (name:string): string | undefined => {
    if(name.trim().length < 3){
      return 'O campo deve ter no mínimo 03 caracteres';
    }
  }

  const validateEmail = (email:string): string | undefined => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if(!emailRegex.test(email)){
      return 'O e-mail precisa ser válido'
    }
  }

  const validateAge = (age:string): number | string | undefined=> {
    const ageNumber = Number(age)
    if(isNaN(ageNumber) || ageNumber < 18){
      return 'A idade precisa ser válida'
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nameError = validateName(formData.name)
    const emailError = validateEmail(formData.email)
    const ageError = validateAge(formData.age)
    
    const toastPosition = toast.POSITION.TOP_RIGHT

    if(nameError){
      toast.error(nameError, {position:toastPosition});
      return
    }
    
    if(emailError){
      toast.error(emailError, {position:toastPosition});
      return
    }
    
    if(ageError){
      toast.error(ageError, {position:toastPosition});
      return
    }

    console.log(formData)
    navigate('/listview')
  }


  return(
    <>
      <C.Title>Registre-se</C.Title>
      <C.FormContainer onSubmit={handleSubmit}>
        <C.LabelRegister>Nome:</C.LabelRegister>
        <C.InputName value={formData.name} onChange={handleChange}/>
        <C.LabelRegister>E-mail:</C.LabelRegister>
        <C.InputEmail value={formData.email} onChange={handleChange}/>
        <C.LabelRegister>Idade:</C.LabelRegister>
        <C.InputIdade value={formData.age} onChange={handleChange}/>
        <C.Button>Entrar</C.Button>
        <ToastContainer/>
      </C.FormContainer>
    </>
  )
}

export default RegisterView