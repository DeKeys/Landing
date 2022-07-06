import React from "react";
import { SubscriptionSection, SubSection, SubText, Form, FormInput } from "./Introduction.elements";
import { Section, Container, Row, Column, TextWrapper, TopLine, Heading, SubHeading, Subtitle, ImgWrapper, Img, Button } from "../../styles";

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

                                <Form>
                                    <Button fontBig>No link</Button>
                                </Form>
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