import * as C from'./TasksStatus.styles'
import { useMemo } from 'react'
import { useTask } from 'context/task.contex'


export const TasksStatus = () => {
  
  const {tasks} = useTask()

  const Status = useMemo(() => {
     
    const data = tasks.reduce((previus, item) => {
      if(item.isComplete){
        return {complete: previus.complete + 1, inProgress: previus.inProgress }
      } else{
        return {complete: previus.complete, inProgress: previus.inProgress + 1 }
      }
    },{complete:0, inProgress:0 })

    return (
      <C.StatusContainer>
        <C.Total>Total de Tarefas: {tasks.length}</C.Total>
        <C.Complete>Tarefas Completas: {data.complete} </C.Complete>
        <C.inProgress>Tarefas em Progresso: {tasks.length - data.complete}</C.inProgress>
      </C.StatusContainer>
    )
  },[tasks])

  return Status

}