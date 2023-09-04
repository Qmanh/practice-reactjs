import  Navbar  from "react-bootstrap/Navbar";
import  Container from "react-bootstrap/Container";

import  Nav from "react-bootstrap/Nav";
import  NavDropdown  from "react-bootstrap/NavDropdown";
import logoApp from '../assets/images/logo192.png';
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { handleLogOutRedux } from "../redux/actions/userAction";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Header = (props) =>{

    const user = useSelector(state=> state.user.account);
    const a = null;
    

    //const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogOut =()=>{
        // logout();
        // navigate("/");
        // toast.success("LogOut Succeed!");
        dispatch(handleLogOutRedux());
    }

    useEffect(()=>{
        if(user &&  user.auth === false && window.location.pathname !== '/login'){
            navigate("/");
            toast.success("LogOut Succeed!");
        }
    },[user])
    
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary" >
        <Container>
            <Navbar.Brand href="/">
                <img
                    src={logoApp}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"/>
                <span> Web's App</span>
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
                { (user && user.auth || window.location.pathname === '/' || window.location.pathname === '/users')&&
                <>
                <Nav className="me-auto">
                    
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/users" className="nav-link">Manage Users</NavLink>
                   
                    
                </Nav>
                <Nav>
                    {user && user.email &&<span className="nav-link">Welcome {user.email}</span>}
                    <NavDropdown title="Setting" id="basic-nav-dropdown">
                        {user && user.auth === true ?
                        <NavDropdown.Item onClick={()=>handleLogOut()}>Logout</NavDropdown.Item>
                        :<NavLink to="/login" className="dropdown-item">Login</NavLink>
                        }
                        
                   </NavDropdown>
                </Nav>
                </> }
                </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    )
}

export default Header;