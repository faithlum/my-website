import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { NavItems } from "./NavItems";
import "./Navbar.css"

/**
 * Renders the navbar and all its components
 */
function Navbar() {
    const [state, setState] = useState({
        isDropdownOpen: false,

      })

    const handleState = (data) => {
        setState((prevState) => ({
            ...prevState, ...data
        }));
    }

    const handleHover = () => {
        const data = {
            isDropdownOpen: true,
        };
        handleState(data);
    }

    const handleLeave = () => {
        const data = {
            isDropdownOpen: false,
        };  
        handleState(data);
    }

    const checklocation = () => {
        let data = null;
        let locus = window.location.pathname
        if(locus === '/'){
            data = {
                location: true,
            };  
        }
        else {
            data = {
                location: false,
            };  
        }
        handleState(data);
    }

    return (
        <header class="header" style={{ display: "flex", justifyContent: "center", alignItems: "center"}} >
            {/* <a href="#" class="logo">Deep Breathe</a> */}
            <nav onMouseEnter={handleHover} onMouseLeave={handleLeave} >
                <ul className="nav-menu">
                    {NavItems.map((item, index) => {
                        return (
                            <li key={index}
                                onMouseEnter={item.hasDropdown ? handleHover : undefined}
                                onMouseLeave={item.hasDropdown ? handleLeave : undefined}
                            >
                                <Link onClick={checklocation} className={item.clssName} to = {item.url}>
                                    {item.title}
                                </Link>
                                {item.hasDropdown && state.isDropdownOpen && (
                                <div className="dropdown">
                                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                        <li key={dropdownIndex}>
                                        <Link
                                            className={dropdownItem.clssName}
                                            to={dropdownItem.url}
                                            onClick={checklocation}
                                        >
                                            {dropdownItem.title}
                                        </Link>
                                        </li>
                                    ))}
                                </div>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}

export default Navbarx