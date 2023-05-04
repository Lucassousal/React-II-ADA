import { nanoid } from "nanoid";
import { ITaks } from "pages/Listview/types/List.types"
import { ChangeEvent, KeyboardEvent, createContext, useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  handleNewTaskKeyPress:(e: KeyboardEvent<HTMLInputElement>) => void,
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

        toast.success('Tarefa adicionada', {position:toast.POSITION.TOP_RIGHT});

      }else{
        toast.error('Essa tarefa já existe', {position:toast.POSITION.TOP_RIGHT});
      }

    }else{
      toast.error('Preencha uma tarefa antes de adicionar', {position:toast.POSITION.TOP_RIGHT});
    }
  }

  const handleNewTaskKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue !== "") {
      handleAddTask(inputValue);
      setInputValue("");
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
          handleNewTaskKeyPress,
        }}>
      {children}
    </TaskContext.Provider>
  )
}

const useTask = () => useContext(TaskContext)

export {TaskProvider, useTask}