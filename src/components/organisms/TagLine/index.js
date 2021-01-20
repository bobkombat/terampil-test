import React from "react";
import {ButtonTagLineContainer, Container, ImageBackground, SubTagLine, TagLineStyled} from "./TagLine.styled";
import Button from "../../atoms/Button";
import logo from "../../../assets/png/terampil-transparent.png";

export function TagLine() {
    return (
      <Container>
        <TagLineStyled>Learn anytime, anywhere, at your own pace.</TagLineStyled>
        <SubTagLine>Watch thousand of lesson from the best as they share their stories, skills,
          shortcuts, failures, and success</SubTagLine>
        <ButtonTagLineContainer>
          <Button primary large>Lihat Langganan</Button>
          <Button secondary large>Mulai Kelas Gratis</Button>
        </ButtonTagLineContainer>

        <ImageBackground src={logo} alt={'Transparent Logo'}/>
      </Container>
    )
}