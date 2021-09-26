import { useContext, useEffect, useState } from "react"
import { NoteCtx } from "../../context/noteCtx"
import Button from "../Button/Button"
import { EachNoteStyled } from "./EachNote.styled"

export default function EachNote(){
    const {notes,setNotes} = useContext(NoteCtx)
    const [edit,setEdit] = useState(false)
    const [divId,setDivId] = useState()


    function deleteNote(id){
        const notes = JSON.parse(localStorage.getItem('notes'))
        localStorage.setItem('notes',JSON.stringify(notes.filter(note=>note.id !== id)))
        setNotes(JSON.parse(localStorage.getItem('notes')))
    }

    function saveNote(id){
        const notes = JSON.parse(localStorage.getItem('notes'))
        const div = document.getElementById(id)
        localStorage.setItem('notes',JSON.stringify(notes.map(note=>{
            if(note.id === id){
                return {
                    ...note,
                    title:div.children[0].textContent,
                    content:div.children[1].textContent
                }
            }return note
        })))
        setNotes(JSON.parse(localStorage.getItem('notes')))
        setEdit(false)
    }
    return(
    <>
        {
           notes.map((note,index)=>{
               return(
                   <EachNoteStyled key={index}
                    id={note.id}
                    className={(edit && divId == note.id) ? 'editable_mode' : null}
                    onClick={(e)=>{e.stopPropagation();setEdit(true);setDivId(note.id)}}>
                    <h2 id='title' contentEditable={edit} suppressContentEditableWarning={true}>{note.title}</h2>
                    <p id='content' contentEditable={edit} suppressContentEditableWarning={true}>{note.content}</p>
                    <div className="btns">
                        <Button cname='save_btn' saveNote={(e)=>{e.stopPropagation();saveNote(note.id)}}>save</Button>
                        <Button cname='delete_btn' deleteNote={function(){deleteNote(note.id)}}>d</Button>
                    </div>
                   </EachNoteStyled>
               )
           })
        }
        </>
    )
}