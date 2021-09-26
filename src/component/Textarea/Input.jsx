export default function Input({setShow}){
    return <input id='note_title' type="text" title='note title' aria-label='enter note title' placeholder='type note title' onClick={()=>setShow(true)} onDoubleClick={()=>setShow(false)} />
}