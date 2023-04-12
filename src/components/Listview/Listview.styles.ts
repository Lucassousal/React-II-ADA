import styled from "styled-components";

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 30rem;
`

export const TodoListContainer = styled.div`
    background: grey;
    border-radius: 1rem;
    padding: 3rem 1rem;
    display: flex;
    flex-direction: column;
`

export const TodoListItemContainer = styled.div`
    display:flex;
    align-items: center;
    gap: 5px;
`

export const TodoListItem = styled.label`
    display: flex;
    padding: 0.5rem 0;
    align-items: center;
    font-size: 1.2rem;
`