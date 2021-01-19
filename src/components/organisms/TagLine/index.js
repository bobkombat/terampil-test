import React from "react";
import {ButtonTagLineContainer, Container, SubTagLine, TagLineStyled} from "./TagLine.styled";
import Button from "../../atoms/Button";

export function TagLine() {
    return (
            <Container>
                <img src='../../../assets/png/terampil-transparent.png' />
                <TagLineStyled>Learn anytime, anywhere, at your own pace.</TagLineStyled>
                <SubTagLine>Watch thousand of lesson from the best as they share their stories, skills,
                    shortcuts, failures, and success</SubTagLine>
                <ButtonTagLineContainer>
                    <Button primary large>Lihat Langganan</Button>
                    <Button secondary large>Mulai Kelas Gratis</Button>
                </ButtonTagLineContainer>
            </Container>
    )
}
