import { Link } from "react-router-dom";

export default function Home(){
    return (
        <>
            <h1>hi</h1>
            <div style={{display:"flex",columnGap:20+"px"}}>
                <Link to={'/about'}>About Us</Link>
                <Link to={'/contact'}>Contact Us</Link>
            </div>
        </>
    )
}