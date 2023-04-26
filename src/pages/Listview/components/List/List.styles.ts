import styled from "styled-components";

export const ListContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  background-color:#333;
  border-radius:10px;
  padding: 40px 20px;
  margin-top:160px;
  margin-bottom:80px;
  gap:8px;
  position:relative;
`;

export const ListEmpty = styled.div`
  width:100%;
  text-align:center;
`;

export const SearchInput = styled.input`
  width: 30rem;
  height: 2.3rem;
  border-radius: 20px;
  border: 1px solid rgba(27, 31, 35, 0.15);
  font-size: 0.8rem;
  padding-left: 0.5rem;
  margin: 0 auto 15px auto;
`