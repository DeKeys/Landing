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
                            <Subtitle lightTextDesc={true}>Open-source, No-charge & Safe</Subtitle>
                            
                            <SubSection>
                                <SubHeading lightText={true}>
                                    Try it out! Download the app from AppStore.
                                </SubHeading>

                                <Form>
                                    <Button fontBig>Get App</Button>
                                </Form>
                            </SubSection>
                        </TextWrapper>
                    </Column>
                        
                    <Column>
                        <ImgWrapper start={false}>
                            <Img src={require("../../images/subscribe.png")} alt={""} />
                        </ImgWrapper>
                    </Column>
                </Row>
            </Container>
        </Section>
    );
}

export default Introduction;