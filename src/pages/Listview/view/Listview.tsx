import { useEffect, useState } from 'react'
import { ChangeEvent } from 'react'

import { nanoid } from 'nanoid'

import { List } from '../components/List/List'

import * as C from './Listview.styles'

import { ITaks } from 'pages/Listview/types/List.types'


export const ListView = () => {

  const [tasks, setTasks] = useState<ITaks[]>([])
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = (inputValue : string) => {
    if(inputValue !== ''){
  
      const verifyTask = tasks.find(item => item.label.toLowerCase().trim() === inputValue.toLowerCase().trim())
      
      if(!verifyTask || tasks.length === 0){
        
        const newTask = {
          id:nanoid(),
          label: inputValue,
          isComplete: false,
        }

        const newTasks = [...tasks, newTask]
        setTasks(newTasks);
        setInputValue('')
        setLocalTasks(newTasks)

      }else{
        alert('essa task já existe')
      }

    }else{
      alert('Preencha uma tarefa antes de adicionar')
    }
  }

  const setLocalTasks = (newTasks : ITaks[]) => {
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  const handleChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setInputValue(inputValue)
  }

  useEffect(() => {
    
    const fetchTasks = () => {

      const localStringTasks = localStorage.getItem('tasks');
      if(localStringTasks) {
        const localTasks = JSON.parse(localStringTasks)
        setTasks(localTasks)
      }
    }

    fetchTasks();
  },[])

  return(
    <C.ListContainer>
      <C.InputContainer>
        <C.Input value={inputValue} onChange={handleChangeInput} placeholder='Digite a sua nova tarefa'/>
        <C.Button onClick={() => handleAddTask(inputValue)}>+</C.Button>
      </C.InputContainer>
      <List 
        tasks={tasks}
        setTasks = {setTasks}
        setLocalTasks = {setLocalTasks}
      />
    </C.ListContainer>
  )
}