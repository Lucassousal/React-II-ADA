import { nanoid } from "nanoid";
import { ITaks } from "pages/Listview/types/List.types"
import { ChangeEvent, createContext, useContext, useEffect, useState } from "react";

interface ITaskContext{
  tasks: ITaks[];
  setTasks: React.Dispatch<React.SetStateAction<ITaks[]>>;
  searchTerm:string;
  setSearchTerm:React.Dispatch<React.SetStateAction<string>>;
  tasksFilter: ITaks[];
  handleAddTask:(inputValue: string) => void;
  inputValue:string;
  setInputValue:React.Dispatch<React.SetStateAction<string>>;
  setLocalTasks:(newTasks: ITaks[]) => void;
  handleChangeInput:(e: ChangeEvent<HTMLInputElement>) => void,
}

const TaskContext = createContext<ITaskContext>({} as ITaskContext)

interface IProps {
  children:React.ReactNode
}

const TaskProvider = ({children}:IProps) => {

  const [tasks, setTasks] = useState<ITaks[]>([])
  const [searchTerm, setSearchTerm] = useState("");
  const [tasksFilter, setTasksFilter] = useState<ITaks[]>([])
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

  const setLocalTasks = (newTasks:ITaks[]) => {
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  const handleChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setInputValue(inputValue)
  }

  useEffect(()=> {
    const listTasks = tasks.filter((eachTask) => eachTask.label.toLowerCase().includes(searchTerm.toLowerCase()))
    setTasksFilter(listTasks)
  },[searchTerm, tasks])

  useEffect(()=>{
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
    <TaskContext.Provider 
      value={{
          tasks, 
          setTasks,
          searchTerm,
          setSearchTerm,
          tasksFilter,
          handleAddTask,
          setLocalTasks,
          inputValue,
          setInputValue,
          handleChangeInput,
        }}>
      {children}
    </TaskContext.Provider>
  )
}

const useTask = () => useContext(TaskContext)

export {TaskProvider, useTask}