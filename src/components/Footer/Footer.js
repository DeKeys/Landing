import React from "react";
import { FooterContainer, FooterLinksContainer, FooterLink, WebsiteRights } from "./Footer.elements";

function Footer() {
    return (
        <FooterContainer>
            <FooterLinksContainer>
                <FooterLink to="/policy">Privacy Policy</FooterLink>
                <FooterLink to="/terms">Terms of Service</FooterLink>
                <WebsiteRights>© DeKeys 2022</WebsiteRights>
            </FooterLinksContainer>
        </FooterContainer>
    );
}

export default Footer;