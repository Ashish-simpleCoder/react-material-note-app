import EachNote from "../EachNote/EachNote";
import { HeadingDiv } from "../Header/Header.styled";

export default function NoteOutput(){
    return(
            // {/* <HeadingDiv/> */}
        <main style={{display:"flex",flexWrap:'wrap',justifyContent:'space-around',gap:'clamp(3rem,4rem,4vw)',paddingBottom:'4rem'}}>
            <EachNote/>
        </main>
    )
}
