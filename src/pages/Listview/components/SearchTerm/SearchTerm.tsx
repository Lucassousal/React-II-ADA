import { useTask } from "context/task.contex";
import * as C from "pages/Listview/components/List/List.styles"


 export const SearchTerm = () => {
  
  const {searchTerm, setSearchTerm} = useTask()
  
  return (
    <C.SearchInput 
      value={searchTerm}  
      onChange={e => setSearchTerm(e.target.value)}
      placeholder="Digite o nome da tarefa que você quer pesquisar"
    />
  )
}