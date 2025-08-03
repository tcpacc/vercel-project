import { Link } from "react-router-dom";

export default function Home(){
    return (
        <>
            <h1 className="title">Home</h1>
            <div style={{display:"flex",columnGap:20+"px"}}>
                <Link to={'/about'}>About Us</Link>
                <Link to={'/contact'}>Contact Us</Link>
                <Link to={'/temperature'}>Temperature</Link>
            </div>
        </>
    )
}