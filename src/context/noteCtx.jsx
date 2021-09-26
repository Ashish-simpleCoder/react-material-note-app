import { createContext, useState } from "react";

export const NoteCtx = createContext()
export default function NoteProvider(props){
    const [notes,setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
    return <NoteCtx.Provider value={{notes,setNotes}}>{props.children}</NoteCtx.Provider>
}