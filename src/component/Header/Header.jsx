import Button from "../Button/Button"
import { HeadingDiv } from "./Header.styled"

export default function Header(){
    function toggleTheme(){
        document.body.classList.toggle('dark_mode')
    }
    return(
        <HeadingDiv height={'5rem'} justify_content='space-between' fontSize='clamp(2rem,2.5rem,2.5vw)' fontWeight='500'>
            <h3 className='site_title'><span><img src="./img/note_img.png" alt="note icon" /></span>Material Note App (React.JS)</h3>
            <Button toggleTheme={toggleTheme} darkmode>🌞</Button>
        </HeadingDiv>
    )
}