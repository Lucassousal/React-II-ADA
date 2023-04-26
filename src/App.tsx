import { AppLayoutContainer, GlobalStyle } from "./styles";

import { Footer } from "components/Footer/Footer";
import { Header } from "components/Header/Header";
import { TaskProvider } from "context/task.contex";
import { LoaderProvider } from "context/loader.context";
import { ListView } from "pages/Listview/view/Listview";



const App = () => {
  return (
    <>
      <TaskProvider>
        <LoaderProvider>
          <GlobalStyle />
          <AppLayoutContainer>
            <Header/>
            <ListView></ListView>
            <Footer/>
          </AppLayoutContainer>
        </LoaderProvider>
      </TaskProvider>
    </>
  );
}

export default App;
