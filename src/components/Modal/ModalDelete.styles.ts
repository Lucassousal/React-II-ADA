import styled from "styled-components";


export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor:'#333',
    borderRadius:'10px',
  },
  overlay:{
    zIndex:'999',
  }
};

export const Title = styled.h2`
  color: #fff;
  margin:0;
`
export const Content = styled.p`
  color: #fff;
  margin:30px 0;
`

export const CancelButton = styled.button`
  padding:5px 10px;
  border: 1px solid red;
  color:red;
  background-color:#fff;
  cursor:pointer;

  :hover{
    box-shadow: 0px 0px 8px -2px rgba(255,255,255,0.75);
    transition: all ease-in-out 0.2s
  }
  `

export const DeleteButton = styled.button`
  padding:5px 10px;
  border: 1px solid red;
  background-color:red;
  color: #fff;
  cursor:pointer;

  :hover{
    box-shadow: 0px 0px 6px -2px rgba(255,255,255,0.75);
    transition: all ease-in-out 0.2s
  }
`

export const ModalContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
`

export const ModalBody = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`

export const ModalAction = styled.div`
  width:100%;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  gap:10px
`