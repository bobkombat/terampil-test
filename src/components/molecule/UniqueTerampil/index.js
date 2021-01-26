import React from 'react';
import {
  ContainerTitle,
  Title,
  PointTitle,
  Icon,
  ContainerPoint,
  TitlePrice,
} from './UniqueTerampil.styled';
import IconVector from '../../../assets/png/Vector.png';

import Button from '../../atoms/Button/index';

const PointUniqeTerampil = [
  { src: IconVector, message: '150+ Kelas Online' },
  { src: IconVector, message: '50+ Pengajar Profesional' },
  { src: IconVector, message: '2+ Kelas baru setiap minggu' },
  { src: IconVector, message: 'Sertfikat yang sudah direview oleh kampus terkenal di Indonesia' },
  { src: IconVector, message: 'Download dan nikmati secara offline' },
];
function UniqueTitle(props) {
  return (
    <ContainerTitle>
      <Title>Master skills with in-depth learning & Discuss</Title>
      {PointUniqeTerampil.map((item, i) => {
        return (
          <ContainerPoint key={i}>
            <Icon src={item.src} alt="logo" />
            <PointTitle>{item.message}</PointTitle>
          </ContainerPoint>
        );
      })}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button large>Mulai Berlangganan</Button>
        <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column' }}>
          <TitlePrice>50.000/bulan</TitlePrice>
          <PointTitle style={{ fontSize: '16px' }}>beiled anual</PointTitle>
        </div>
      </div>
    </ContainerTitle>
  );
}

UniqueTitle.propTypes = {};

export default UniqueTitle;
