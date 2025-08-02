import { Link } from "react-router-dom";

export default function Home(){
    return (
        <>
            <h1>hi</h1>
            <Link to={'/about'}>About Us</Link>
        </>
    )
}