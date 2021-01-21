import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, ImageDiv, ContainerImage } from './Cooperation.styled';

//ASSET
import Icon1 from '../../../assets/png/Terampil/image 10.png';
import Icon2 from '../../../assets/png/Terampil/image 11.png';
import Icon3 from '../../../assets/png/Terampil/image 12.png';
import Icon4 from '../../../assets/png/Terampil/image 13.png';
import Icon5 from '../../../assets/png/Terampil/image 14.png';

const IconCooperation = [
  { src: Icon1 },
  { src: Icon2 },
  { src: Icon3 },
  { src: Icon4 },
  { src: Icon5 },
];

function Cooperation(props) {
  return (
    <Container>
      <div>
        <Title>Terampil sudah berelasi dengan beberapa Perusahaan ternama</Title>
      </div>
      <ContainerImage>
        {IconCooperation.map((item, i) => {
          return (
            <ImageDiv>
              <img src={item.src} key={i} alt="logo" />
            </ImageDiv>
          );
        })}
      </ContainerImage>
    </Container>
  );
}

Cooperation.propTypes = {};

export default Cooperation;
