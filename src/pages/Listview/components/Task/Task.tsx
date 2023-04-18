import {  useState } from 'react';
import * as C from './Task.styles'

import Checkbox from 'pages/Listview/components/Checkbox/Checkbox'


type TaskProps = {
  id:string,
  label:string;
  isComplete:boolean,
  deleteTask: (id:string) => void,
  changeChecked: (id:string) => void,
}

export const Task = ({id, label, isComplete, deleteTask, changeChecked}: TaskProps) => {

  const [checked, setChecked] = useState(isComplete);

  const handleCheckedTask = () => {
    setChecked(!checked);
    changeChecked(id);
  }


  return (
    <C.TaskContainer>
      <C.TaskDiv checked={checked} onClick={handleCheckedTask}>
        <Checkbox checked={checked}/>
        <C.Text checked={checked}>{label}</C.Text>
      </C.TaskDiv>
        <C.BtnDelete onClick={() => deleteTask(id)}>&#215;</C.BtnDelete>
    </C.TaskContainer>
  )
}