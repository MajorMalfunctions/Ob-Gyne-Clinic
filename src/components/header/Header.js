import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavItems } from './NavItems';
import '../../styles/header.css';
import Clinic from "../../assets/images/clinic.png"

class Header extends Component{
    state = { clicked: false};

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render(){
        return (
            <nav className="NavbarItems">
                <div className="navbar-logo">
                    <img className="navbar-image" src={Clinic} alt="clinica-baltazar" />
                </div>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ?
                    "nav-menu active" : "nav-menu"
                }>
                    {NavItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <i className={item.icon}>
                                    </i>
                                    {item.title}
                                </Link>
                        </li>
                        );
                    })}
                    <Link className="log-button" to="/login">Login</Link>
                </ul>
            </nav>
          )
    }
}

export default Header;
