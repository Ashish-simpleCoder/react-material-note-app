import Header from "./component/Header/Header"
import NoteInput from "./component/NoteInput/NoteInput"
import NoteOutput from "./component/NoteOutput/NoteOutput"
import NoteProvider from "./context/noteCtx"
import { GlobalStyle } from "./GlobalStyles.styled"
import "./index.css"

export default function App(){
    return(
        <NoteProvider>
            <GlobalStyle/>
            <Header/>
            <NoteInput/>
            <NoteOutput/>
        </NoteProvider>
    )
}