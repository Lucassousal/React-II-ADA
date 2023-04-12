import styled from "styled-components"

type Props = {
  width:string,
  height:string,
}

export const SpacerContainer = styled.div<Props>`
  width:${props => props.width ? props.width : '0px'};
  height:${props => props.height ? props.height : '0px'};
`