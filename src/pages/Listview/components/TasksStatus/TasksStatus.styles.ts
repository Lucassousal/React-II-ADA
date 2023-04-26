import styled from "styled-components";

export const StatusContainer = styled.div`
  display:flex;
  gap:10px;
  position:absolute;
  top: 0;
  right:0;
`

export const Total = styled.span`
  padding: 5px 10px;
  border-radius : 5px;
  background-color: #0A6DAD;
  color:#fff;
  font-size: 0.8rem;
  text-shadow: 0px 0px 7px rgba(0,0,0,0.53);
`
export const Complete = styled.span`
  padding: 5px 10px;
  border-radius : 5px;
  background-color: #35B305;
  color:#fff;
  font-size: 0.8rem;
  text-shadow: 0px 0px 7px rgba(0,0,0,0.53);
`
export const inProgress = styled.span`
  padding: 5px 10px;
  border-radius : 5px;
  background-color: #FFC93F;
  color:#fff;
  font-size: 0.8rem;
  text-shadow: 0px 0px 7px rgba(0,0,0,0.53);
`