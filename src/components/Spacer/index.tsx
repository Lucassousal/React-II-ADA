import {SpacerContainer} from './Spacer.styles'

type Props = {
  width:string,
  height:string,
}

export const Spacer = ({width, height}:Props) => {
  return(
    <SpacerContainer width={width} height={height}/>
  )
}