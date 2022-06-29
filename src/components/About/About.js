import React from "react";
import { Section, Container, Row, Column, TextWrapper, TopLine, Heading, SubHeading, Subtitle, Button, ImgWrapper, Img } from "../../styles";

function About() {
    return (
        <>
            <Section lightBg={true}>
                <Container>
                    <Row imgStart={true}>
                        <Column>
                            <TextWrapper>
                                <Heading lightText={false}>How that works?</Heading>
                                <SubHeading lightText={false}>
                                    <strong>1. Create an Account</strong>
                                    <br/>
                                    Get an unique private key for your own password storage.
                                    
                                    <br/>
                                    <br/>
                                    
                                    <strong>2. Add your Passwords</strong>
                                    <br/>
                                    All of the passwords you add to the app are going to be stored completely decentralized on all computers from all around the worlds using IPFS.
                                    
                                    <br/>
                                    <br/>
                                    
                                    <strong>3. Use the App</strong>
                                    <br/>
                                    Just use the app and Enjoy!
                                </SubHeading>
                            </TextWrapper>
                        </Column>
                        
                        <Column>
                            <ImgWrapper start={true}>
                                <Img src={require("../../images/tutorial.svg")} alt={""} />
                            </ImgWrapper>
                        </Column>
                    </Row>
                </Container>
            </Section>
        </>
    )
};

export default About;