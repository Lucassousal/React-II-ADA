import * as C from 'components/Header/Header.styles'
import { useLoader } from 'context/loader.context'


export const Header = () => {

  const {Loader} = useLoader()

  return(
    <C.HeaderContainer>
      <C.HeaderLeft>
        <img src="" alt="" />
        <span>To Do List</span>
      </C.HeaderLeft>
      <C.HeaderRight>
        <img src="" alt="" />
        {Loader(true, '#FFC93F', 20 )}
      </C.HeaderRight>
    </C.HeaderContainer>
  )
}