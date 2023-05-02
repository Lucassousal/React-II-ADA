import { List } from '../components/List/List'

import * as C from './Listview.styles'

import { useTask } from 'context/task.contex'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ListView = () => {

  const {tasks, setTasks, inputValue, handleAddTask, setLocalTasks, handleChangeInput, handleNewTaskKeyPress} = useTask()

  return(
    <C.ListContainer>
      <C.InputContainer>
        <C.Input value={inputValue} onChange={handleChangeInput} onKeyPress={handleNewTaskKeyPress} placeholder='Digite a sua nova tarefa'/>
        <C.Button onClick={() => handleAddTask(inputValue)}>+</C.Button>
      </C.InputContainer>
      <List 
        tasks={tasks}
        setTasks = {setTasks}
        setLocalTasks = {setLocalTasks}
      />
    <ToastContainer/>
    </C.ListContainer>
  )
}

export default ListView