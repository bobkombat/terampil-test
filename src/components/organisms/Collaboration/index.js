import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Text } from './Collaboration.styled';
import GoogleIcon from '../../../assets/png/image1.png';
import IBMIcon from '../../../assets/png/image 2.png';
import UiIcon from '../../../assets/png/image 3.png';
import UGMIcon from '../../../assets/png/image 4.png';
import TokpedIcon from '../../../assets/png/image 5.png';
import ITBIcon from '../../../assets/png/image 6.png';

const iconColaboratin = [
  { src: GoogleIcon },
  { src: IBMIcon },
  { src: UiIcon },
  { src: UGMIcon },
  { src: TokpedIcon },
  { src: ITBIcon },
];

function Collaboration(props) {
  return (
    <Container>
      <div>
        <Text>
          Kita berkaloborasi dengan <span> Pemimpin Industri & Universitas Terbaik</span>
        </Text>
      </div>
      <div className="image-icon">
        {iconColaboratin.map((item, index) => {
          return <Image src={item.src} alt="logo" />;
        })}
      </div>
    </Container>
  );
}

Collaboration.propTypes = {};

export default Collaboration;
