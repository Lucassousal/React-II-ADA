import { AppLayoutContainer, GlobalStyle } from "./styles";

import { Footer } from "components/Footer/Footer";
import { Header } from "components/Header/Header";
import { ListView } from "pages/Listview/view/Listview";



const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppLayoutContainer>
        <Header/>
        <ListView></ListView>
        <Footer/>
      </AppLayoutContainer>
    </>
  );
}

export default App;
