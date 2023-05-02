import { AppLayoutContainer, GlobalStyle } from "./styles";
import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Footer } from "components/Footer/Footer";
import { Header } from "components/Header/Header";
import { TaskProvider } from "context/task.contex";
import { LoaderProvider} from "context/loader.context";
import ClipLoader from "react-spinners/ClipLoader";

// import { ListView } from "pages/Listview/view/Listview";
// import { RegisterView } from "pages/Register/view/Register";
import { IRegisterData } from "pages/Register/types/Register.types";


const ListView = lazy(() => import("pages/Listview/view/Listview"))
const RegisterView = lazy(() => import("pages/Register/view/Register"))


const App = () => {

  return (
    <>
      <TaskProvider>
        <LoaderProvider>
          <GlobalStyle />
          <AppLayoutContainer>
            <Header/>
            <Suspense fallback={<ClipLoader loading={true} color={'#FFC93F'} size={30}/>}> 
            <Router>
              <Routes>
                <Route path="/" element={<RegisterView onSubmit={function handleSubmit(data: IRegisterData):void {}}/>}/>
                <Route path="/listview" element={<ListView/>}/>
              </Routes>
            </Router>
            </Suspense>
            <Footer/>
          </AppLayoutContainer>
        </LoaderProvider>
      </TaskProvider>
    </>
  );
}

export default App;
