import { ButtonStyled } from "./Button.styled";

export default function Button(props){
    return (
        <>
        {
            props.genBtn &&
            (<ButtonStyled genBtn={props.genBtn} onClick={props.genNote}>{props.children}</ButtonStyled>)
        }
        {
            props.darkmode && (<ButtonStyled genBtn={props.genBtn} onClick={props.darkmode && props?.toggleTheme}>{props.children}</ButtonStyled>)
        }
        {
            props.deleteNote && (<ButtonStyled className={props.cname} onClick={props.deleteNote}>{props.children}</ButtonStyled>)
        }
        {
            props.saveNote && (<ButtonStyled  className={props.cname} onClick={props.saveNote}>{props.children}</ButtonStyled>)
        }

        </>
    )
}