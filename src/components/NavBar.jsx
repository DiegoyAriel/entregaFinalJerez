import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div>N
        <nav>
            <ul>
                <li>
                    <Link to={"itemListContainer"}>Productos</Link>
                </li>
                <li>
                    <Link to={"/"}>Maltese Corner</Link>
                </li>
                <li>
                    <Link to={"Cart"}><CartWidget/></Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar