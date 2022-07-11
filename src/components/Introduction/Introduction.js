import React from "react";
import { SubscriptionSection, SubSection, SubText, Form, FormInput } from "./Introduction.elements";
import { Section, Container, Row, Column, TextWrapper, TopLine, Heading, SubHeading, Subtitle, ImgWrapper, Img, Button } from "../../styles";
import TwitterLogo from "../../images/Twitter-Logo.png";
import DiscordLogo from "../../images/Discord-Logo.png";

function Introduction() {
    return (
        <Section lightBg={false}>
            <Container>
                <Row imgStart={false}>
                    <Column>
                        <TextWrapper>
                            <TopLine lightTopLine={true}>It's Decentralized and Free For Everyone!</TopLine>
                            <Heading lightText={true}>Password Manager of the Future</Heading>
                            
                            <SubSection>
                                <SubHeading lightText={true}>
                                    You can download the client for Desktop on our GitHub.

                                    <br/>
                                    <br/>

                                    <strong>We are currently working on an IOS app..</strong>
                                </SubHeading>

                                <Column>
                                    <Button 
                                        primary 
                                        onClick={ (e) => {
                                            e.preventDefault();
                                            window.location.href = "https://twitter.com/De_Keys_";
                                        }}
                                    >
                                        <img src={TwitterLogo} height="28" style={{marginRight: "8px"}}/>
                                        <strong>Twitter</strong>
                                    </Button>

                                    <br/>

                                    <Button 
                                        primary 
                                        onClick={ (e) => {
                                            e.preventDefault();
                                            window.location.href = "https://discord.gg/94WHrZmaXR";
                                        }}
                                    >
                                        <img src={DiscordLogo} height="22" style={{marginRight: "8px"}}/>
                                        <strong>Discord</strong>
                                    </Button>
                                </Column>
                            </SubSection>
                        </TextWrapper>
                    </Column>
                        
                    <Column>
                        <ImgWrapper start={false}>
                            <Img src={require("../../images/logo.png")} alt={""} />
                        </ImgWrapper>
                    </Column>
                </Row>
            </Container>
        </Section>
    );
}

export default Introduction;