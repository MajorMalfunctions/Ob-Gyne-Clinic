import React, { Component } from 'react'
import { Link, Redirect, Navigate } from 'react-router-dom';
import { NavItems } from './NavItems';
import '../../styles/header.css';
import Clinic from "../../assets/images/clinic.png"
import { toast } from 'react-toastify';

import { AiOutlineLogout } from "react-icons/ai"

class Header extends Component{
    state = { clicked: false};
    state = { redirect: false};

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    handleLogout = () => {
        toast.success('Logout Success', { position: toast.POSITION.TOP_CENTER})
        localStorage.clear();
        window.location.reload();
    }

    render(){
        return (
            <nav className="NavbarItems">
                <div className="navbar-logo">
                    <a>
                        <img className="navbar-image" src={Clinic} alt="clinica-baltazar" />
                    </a>
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
                    <button onClick={this.handleLogout} className="header_button" to="/">
                        <i class="fa fa-sign-out">{" "}{" "}Logout</i>
                    </button>
                </ul>
            </nav>
        )
    }
}

export default Header;
