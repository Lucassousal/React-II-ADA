import { createContext, useContext } from "react"
import ClipLoader from "react-spinners/ClipLoader";

interface ILoaderContext {
  Loader: (loading: boolean, color: string, size: number) => JSX.Element
}

interface IProps {
  children:React.ReactNode
}

const LoaderContext = createContext<ILoaderContext>({} as ILoaderContext)

const LoaderProvider = ({children}:IProps) => {

  const Loader = (loading:boolean, color:string, size:number) => {
    return <ClipLoader loading={loading} color={color} size={size}/>
  }


  return(
    <LoaderContext.Provider 
      value={{
          Loader,
        }}>
      {children}
    </LoaderContext.Provider>
  )
}

const useLoader = () => useContext(LoaderContext)

export {LoaderProvider, useLoader}