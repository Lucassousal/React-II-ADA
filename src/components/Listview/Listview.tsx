import { Checkbox } from "../Checkbox";
import { Spacer } from "../Spacer";
import {
  ListContainer,
  TodoListContainer,
  TodoListItem,
  TodoListItemContainer,
} from "./Listview.styles";
import { ITaskState } from "./Listview.types";

const Listview = () => {
  const tasks: ITaskState[] = [
    { id: "1", label: "Primeira task", isComplete: false },
    { id: "2", label: "Segunda task", isComplete: false },
  ];

  return (
    <ListContainer>
      <TodoListContainer>       
          {tasks.map((eachTask) => {
            return(
                <>
                  <TodoListItemContainer>
                    <Checkbox/>
                    <TodoListItem>
                      {eachTask.label}
                    </TodoListItem>
                  </TodoListItemContainer>
                  <Spacer width={'100%'} height={'10px'}/>
                </>

              ) 
          })}
      </TodoListContainer>
    </ListContainer>
  );
};

export default Listview;
