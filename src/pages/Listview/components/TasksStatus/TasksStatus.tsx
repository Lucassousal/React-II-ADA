import { ITaks } from 'pages/Listview/types/List.types'
import * as C from'./TasksStatus.styles'
import { useMemo } from 'react'

type TasksStatusProps = {
  tasks:ITaks[]
}

export const TasksStatus = ({tasks}:TasksStatusProps) => {
  
  const Status = useMemo(() => {

    const completeTasks = tasks.filter( item => item.isComplete === true)
  
    return (
      <>
        <C.Total>Total de Tarefas: {tasks.length}</C.Total>
        <C.Complete>Tarefas Completas: {completeTasks.length}</C.Complete>
      </>
    )

  }, [tasks])
  
  return (
    <C.StatusContainer>
      {Status}
    </C.StatusContainer>
  )
}