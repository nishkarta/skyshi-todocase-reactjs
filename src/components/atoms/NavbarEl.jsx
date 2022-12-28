import { Navbar } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const NavbarEl = () => {
    const navigate = useNavigate()
    return (

        <Navbar data-cy="header-background" className="navbar-container" >
            <Navbar.Brand data-cy="header-background" onClick={() => navigate('/')} className="text-white cursor-pointer">To Do List App</Navbar.Brand>
        </Navbar>

    )
}

export default NavbarEl