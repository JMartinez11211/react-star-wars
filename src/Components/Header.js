import {Link} from "react-router-dom"

function Header() {
    
return(
    <div id="header">
        <h1>STAR WARS STARSHIPS</h1>
        <nav id="nav">
            <Link to='home'> Home </Link>
            <Link to='about'> About </Link>
            <Link to='contact'> Contact </Link>
        </nav>
    </div>
   
)

}

export default Header;