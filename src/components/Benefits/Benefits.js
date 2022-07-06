import React from "react";
import { Section, Container, Row, Column, TextWrapper, TopLine, Heading, SubHeading, Subtitle, ImgWrapper, Img, Button } from "../../styles";

function Benefits() {
    return (
        <Section lightBg={false}>
            <Container>
                <Row imgStart={false}>
                    <Column>
                        <TopLine lightTopLine={true}>Why our solution is the best?</TopLine>
                        <Heading lightText={true}>Benefits</Heading>
                        <SubHeading lightText={true}>
                            <strong>- Decentralization</strong>
                            <br/>
                            All of your passwords are stored everywhere on the internet, and at the same time no one can use them. Thanks to IPFS that is providing decentralized storage.
                                    
                            <br/>
                            <br/>
                                    
                            <strong>- Open Source</strong>
                            <br/>
                            You can even run your own server, because our code is completely Open-Source. This means that our code is completely safe and you can trust us.
                                    
                            <br/>
                            <br/>
                                    
                            <strong>- Encryption</strong>
                            <br/>
                            When you create an account, you get your personal key that you and only you will know. All of your passwords are encrypted using this key on your local device. Therefore, all of the passwords are traversing the web safely.
                        </SubHeading>
                    </Column>
                        
                    <Column>
                        <ImgWrapper start={false}>
                            <Img src={require("../../images/explanation.png")} alt={""} />
                        </ImgWrapper>
                    </Column>
                </Row>
            </Container>
        </Section>
    );
}

export default Benefits;