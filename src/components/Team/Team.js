import React from "react";
import { Section, Container, Row, Column, TextWrapper, TopLine, Heading, SubHeading, Subtitle, ImgWrapper, Img, Button } from "../../styles";

function Team() {
    return (
        <Section lightBg={true}>
            <Container>
                <Column>
                    <TextWrapper>
                        <TopLine lightTopLine={false}>Meet the Team</TopLine>
                        <Heading lightText={false}>We made a revolution!</Heading>
                    </TextWrapper>
                </Column>
                  
                <Row>  
                    <Column>
                        <ImgWrapper start={true}>
                            <Img src={require("../../images/Roman.jpeg")} width="340px" height="340px" style={{
                                objectFit: "cover",
                                borderRadius: 24
                            }} alt={""} />
                        </ImgWrapper>

                        <br/>

                        <SubHeading>
                           <strong>Roman Rakhlin</strong>
                        </SubHeading>
                    </Column> 

                    <Column>
                        <ImgWrapper start={true}>
                            <Img src={require("../../images/Andrew.jpeg")} width="340px" height="340px" style={{
                                objectFit: "cover",
                                borderRadius: 24
                            }} alt={""} />
                        </ImgWrapper>

                        <br/>

                        <SubHeading>
                            <strong>Andrew Trofimov</strong>
                        </SubHeading>
                    </Column> 

                    <Column>
                        <ImgWrapper start={true}>
                            <Img src={require("../../images/Oleg.jpeg")} width="340px" height="340px" style={{
                                objectFit: "cover",
                                borderRadius: 24
                            }} alt={""} />
                        </ImgWrapper>

                        <br/>

                        <SubHeading>
                            <strong>Oleg Rybalko</strong>
                        </SubHeading>
                    </Column> 
                </Row>   
            </Container>
        </Section>
    );
}

export default Team;