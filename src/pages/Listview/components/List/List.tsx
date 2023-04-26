
import { ITaks } from "pages/Listview/types/List.types"
import * as C from "./List.styles"

import { Task } from "pages/Listview/components/Task/Task"
import { Dispatch, SetStateAction} from "react"
import { TasksStatus } from "../TasksStatus/TasksStatus"
import { SearchTerm } from "../SearchTerm/SearchTerm"
import { useTask } from "context/task.contex"

type ListProps = {
  tasks:ITaks[],
  setTasks: Dispatch<SetStateAction<ITaks[]>>,
  setLocalTasks: (newTasks: ITaks[]) => void,
}

export const List = ({tasks, setTasks, setLocalTasks}:ListProps) => {

  const {tasksFilter} = useTask();

  const handleDeleteTask = (id : string) => {
    if(id !== ''){
      
      const newTasks = tasks.filter(item => {
        return item.id !== id 
      })

      setTasks(newTasks);
      setLocalTasks(newTasks);
    }
  }

  const handleCheckedStatus = (id:string) => {
  
    const findedIndexTask = tasks.findIndex( item => item.id === id)

    if(findedIndexTask > -1){
      let copyTasks = [...tasks];
      copyTasks[findedIndexTask].isComplete = !copyTasks[findedIndexTask].isComplete

      setTasks(copyTasks)
      setLocalTasks(copyTasks)
    }
  }

  return (
    <>
      <C.ListContainer>

        { tasks.length > 0 && 
          <>
            <TasksStatus/>
            <SearchTerm/>
          </>
        }
        {
          tasks.length > 0 ?
          tasksFilter.map((element)=> {
                return(
                  <Task 
                    key={element.id} 
                    id={element.id} 
                    label={element.label} 
                    isComplete={element.isComplete}
                    deleteTask = {handleDeleteTask}
                    changeChecked = {handleCheckedStatus}
                  />
                )
              })
          :
            <C.ListEmpty>Não há item na sua lista</C.ListEmpty>
        }
      </C.ListContainer>
    </>
  )
}