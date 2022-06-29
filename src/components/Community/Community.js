import React from "react";
import { Section, Container, Row, Column, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img, Button } from "../../styles";

function Community() {
    return (
        <Section lightBg={false}>
            <Container>
                <Row imgStart={false}>
                    <Column>
                        <TextWrapper>
                            <TopLine lightTopLine={true}>Community</TopLine>
                            <Heading lightText={true}>We have an amazing community!</Heading>
                            <Subtitle lightTextDesc={true}>Which consosts of people who are truly believe that their passwords should be stored safely.</Subtitle>
                        </TextWrapper>
                    </Column>
                        
                    <Column>
                        <ImgWrapper start={false}>
                            <Img src={require("../../images/profile.jpg")} alt={""} />
                        </ImgWrapper>
                    </Column>
                </Row>
            </Container>
        </Section>
    );
}

export default Community;