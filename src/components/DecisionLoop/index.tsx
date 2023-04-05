import { FormEvent, useRef, useState } from "react"

import './styles.css'

export const DecisionLopp = () => {
  
  const [numbers, setNumbers] = useState<number[]>([])
  
  const formRef = useRef<any>(null)

  const handleFormSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(formRef){
      const formData = new FormData(formRef.current)

      const inputValue = Number(formData.get('numero'))

      setNumbers(prev => [...prev, inputValue])

    }

  }

  return(
    <div className="list-container">
      {
        numbers.length > 0 ? (
          <>
            <h2 className="title-list">Lista de Numeros:</h2>
            <div className="numbers-container">
              {
                numbers.map((item, key) => {
                  return(
                    <span key={key} className="subtitle">{item},</span>
                  )
                })
              }
            </div>
          </>
        ) : (
          <h2 className="title-list">A lista está vazia</h2>
        )
      }
      
      <div className="addNumbers-container">
        <p className="subtitle">Adicione um numero à lista</p>
        <form ref={formRef} onSubmit={handleFormSubmit}>
          <input type="number" name="numero"/>
          <button type="submit">Adicionar</button>
        </form>
      </div>
      
      {
        numbers.length > 0 ? (
          <div>
            <h2 className="title-list">Lista de Números impares:</h2>
            <div className="numbers-container">
              {
                numbers.map((item,index)=>{
                  if(item%2!==0){
                    return(
                      <span key={index} className="subtitle" >{item},</span> 
                    )
                  }
                })
              }
            </div>
          </div>
        ) : (
          " "
        )
      }
    </div>
  )
}