import { useState } from "react"
import './styles.css'

interface Props {
  title:string
  active?:boolean
}

export const ButtonCouter = ({title, active=false}:Props) => {
  
  const [count, setCount] = useState(0)
  
  const handleCount = () => {
    setCount(count + 1)
  }

  return(
    <div className="button-container">
      <p className="title">Clique no botão para incrementar</p>
      <button onClick={handleCount} disabled={!active}>
        {`${title}: ${count}`}
      </button>
    </div>

  )
}