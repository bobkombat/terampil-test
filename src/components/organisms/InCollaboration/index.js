import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image } from './Collaboration.styled';
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
        <h4>
          <span>Kita berkaloborasi dengan </span> Pemimpin Industri & Universitas Terbaik
        </h4>
      </div>
      <div className="image-icon">
        {iconColaboratin.map((item, index) => {
          return <Image src={item.src} key={index} />;
        })}
      </div>
    </Container>
  );
}

Collaboration.propTypes = {};

export default Collaboration;
