import React from "react";
import { Section, Container, Row, Column, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img, Button } from "../../styles";

function Team() {
    return (
        <Section lightBg={true}>
            <Container>
                <Row imgStart={true}>
                    <Column>
                        <TextWrapper>
                            <TopLine lightTopLine={false}>Meet the Team</TopLine>
                            <Heading lightText={false}>Who made revolution in Password Management!</Heading>
                            <Subtitle lightTextDesc={false}>Middle --</Subtitle>
                        </TextWrapper>
                    </Column>
                        
                    <Column>
                        <ImgWrapper start={true}>
                            <Img src={require("../../images/profile.jpg")} alt={""} />
                        </ImgWrapper>
                    </Column>
                </Row>
            </Container>
        </Section>
    );
}

export default Team;