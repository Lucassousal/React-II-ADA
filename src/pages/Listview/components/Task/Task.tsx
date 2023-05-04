import {  useState } from 'react';
import * as C from './Task.styles'
import Modal from 'react-modal';


import Checkbox from 'pages/Listview/components/Checkbox/Checkbox'
import { CancelButton, DeleteButton, Title, customStyles, ModalAction, ModalBody, ModalContainer, Content } from 'components/Modal/ModalDelete.styles';


type TaskProps = {
  id:string,
  label:string;
  isComplete:boolean,
  deleteTask: (id:string) => void,
  changeChecked: (id:string) => void,
}

export const Task = ({id, label, isComplete, deleteTask, changeChecked}: TaskProps) => {

  const [checked, setChecked] = useState(isComplete);

  const [modalIsOpen, setIsOpen] = useState(false)


  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }


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
      <C.BtnDelete onClick={openModal}>&#215;</C.BtnDelete>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
        style={customStyles}
      >
        <ModalContainer>
          <Title>Deseja deletar essa tarefa?</Title>
          <ModalBody>
            <Content>Essa ação não poderá ser desfeita.</Content>
          </ModalBody>
          <ModalAction>
            <CancelButton onClick={closeModal}>Cancelar</CancelButton>
            <DeleteButton onClick={() => deleteTask(id)}>Deletar</DeleteButton>
          </ModalAction>
        </ModalContainer>
      </Modal>

    </C.TaskContainer>
  )
}