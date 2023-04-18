import styled from "styled-components";

type TasksProps ={
  checked:boolean
}

export const TaskContainer = styled.div`
  display:flex;
  align-items:center;
  gap:10px;
`;

export const TaskDiv = styled.div<TasksProps>`
  display:flex;
  gap: 5px;
  align-items:center;
  padding: 5px;
  background-color: ${(props) => (props.checked ? '#555' : '#999')} ;
  border-radius:10px;
  min-width:500px
`;

export const BtnDelete = styled.button`
  width:2rem;
  height:2rem;
  display:flex;
  flex-direction:center;
  justify-content:center;
  align-items:center;
  border-radius:50%;
  background-color: #eee;
  border: 2px solid red;
  padding:0;
  color:red;
  font-weight:600;
  font-size:20px;
  cursor:pointer;

  &:hover{
    background-color: red;
    color:#fff;
    transition: all ease-in-out 0.3s;
  }

`;

export const Text = styled.p<TasksProps>`
  margin: 0;
  color:#333;
  text-decoration:${(props) => (props.checked ? 'line-through' : 'none')};
`;