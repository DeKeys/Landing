import React, {useState, useEffect} from "react";
import { Nav, NavbarContainer, NavLogo, HamburgerIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink } from "./Navbar.elements";
import { Button } from "../../styles";
import GithubLogo from '../../images/GitHub-Logo.png';

function Navbar() {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'> 
                    <strong>DeKeys</strong>
                </NavLogo>

                <NavMenu>
                    <NavItemBtn>
                        <Button 
                            primary 
                            onClick={ (e) => {
                                e.preventDefault();
                                window.location.href = "https://github.com/DeKeys";
                            }}
                        >
                            <img src={GithubLogo} width="28" height="28" style={{marginRight: "8px"}}/>
                            <strong>Source Code</strong>
                        </Button>
                    </NavItemBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar;