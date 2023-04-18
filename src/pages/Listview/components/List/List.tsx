
import { ITaks } from "pages/Listview/types/List.types"
import * as C from "./List.styles"

import { Task } from "pages/Listview/components/Task/Task"
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"

type ListProps = {
  tasks:ITaks[],
  setTasks: Dispatch<SetStateAction<ITaks[]>>,
  setLocalTasks: (newTasks: ITaks[]) => void,
}

export const List = ({tasks, setTasks, setLocalTasks}:ListProps) => {

  const [searchTerm, setSearchTerm] = useState("");

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
    const findedTask = tasks.find(item => item.id === id)
    if(findedTask){
      findedTask.isComplete = !findedTask?.isComplete

      setLocalTasks(tasks)
    }
  }

  const handleSearchValue = (e:ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue)
  }


  return (
    <C.ListContainer>
      { tasks.length > 0 && 
        <C.SearchInput 
          value={searchTerm}  
          onChange={handleSearchValue}
          placeholder="Digite o nome da tarefa que você quer pesquisar"
        />
      }
      {
        tasks.length > 0 ?
          tasks.filter((eachTask) => eachTask.label.includes(searchTerm))
            .map((element)=> {
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
  )
}