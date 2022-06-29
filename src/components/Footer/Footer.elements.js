import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #101522;
  padding: 1rem 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterLinksContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;
    padding: 14px;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin: 0.5rem;

    &:hover {
        color: #0467fb;
        transition: 0.3s ease-out;
    }
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-top: 0.5rem;
    margin-top: 0.5rem;
    margin-left: 1.5rem;
`;