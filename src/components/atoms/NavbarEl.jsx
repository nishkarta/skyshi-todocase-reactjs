import { Navbar } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const NavbarEl = () => {
    const navigate = useNavigate()
    return (

        <Navbar data-cy="header-background" className="navbar-container" >
            <Navbar.Brand data-cy="header-title" onClick={() => navigate('/')} className="text-white cursor-pointer">
                <span className="text-white cursor-pointer navbar-brand">TO DO LIST APP</span>
            </Navbar.Brand>
        </Navbar>

    )
}

export default NavbarEl