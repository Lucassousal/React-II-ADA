import styled from "styled-components";

export const ListContainer = styled.div`
  width:100%;
  height:100%;
  display: flex;
  flex-direction:column;
  align-items:center;
`;

export const InputContainer = styled.div`
  position:absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`

export const Input = styled.input.attrs({type:'text'})`
  width: 30rem;
  height: 2.3rem;
  border-radius: 20px;
  border: 1px solid rgba(27, 31, 35, 0.15);
  font-size: 0.8rem;
  padding-left: 0.5rem;
`

export const Button = styled.button`
  width:40px;
  height: 40px;
  border-radius:50%;
  background-color:#44c767;
  color:#fff;
  font-size:25px;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
  border: 3px solid #44c767;

  &:hover{
    background-color:#fff;
    color:#44c767;
    transition: all  0.5s;
  }

`