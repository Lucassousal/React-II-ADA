import { List } from '../components/List/List'

import * as C from './Listview.styles'

import { useTask } from 'context/task.contex'


export const ListView = () => {

  const {tasks, setTasks, inputValue, handleAddTask,setLocalTasks, handleChangeInput} = useTask()

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