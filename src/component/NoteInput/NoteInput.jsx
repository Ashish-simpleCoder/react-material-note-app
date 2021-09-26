import { lazy, Suspense, useContext, useState } from "react"
import { NoteCtx } from "../../context/noteCtx"
import { NoteInputStyled } from "./NoteInput.styled"

const Input = lazy(()=>import('../Textarea/Input'))
const Textarea = lazy(()=>import('../Textarea/Textarea'))
const Button = lazy(()=>import('../Button/Button'))

export default function NoteInput(){
    const [show,setShow] = useState(false)
    const {notes,setNotes} = useContext(NoteCtx)
    function genNote(){
        if(!window.note_title.value) return

        const note_obj = {id:new Date().getTime().toString(),title:window.note_title.value,content:window.note_content.value}

        let old_notes = JSON.parse(localStorage.getItem('notes')) || []
        setNotes([note_obj,...notes])
        localStorage.setItem('notes',JSON.stringify([note_obj,...old_notes]))

        window.note_title.value=''
        window.note_content.value=''
    }
    return(
        <NoteInputStyled>
            {Suspensed(<Input setShow={setShow}/>)}
            {
                show && (<>
                        {Suspensed(<Textarea/>)}
                        {Suspensed(<Button genBtn genNote={genNote}>+</Button>)}
                    </>)
            }
        </NoteInputStyled>
    )
}

function Suspensed(comp){
    return(
        <Suspense fallback={<h3>loading...</h3>}>{comp}</Suspense>
    )
}