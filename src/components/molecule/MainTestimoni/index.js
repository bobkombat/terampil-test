import React from 'react';
import PropTypes from 'prop-types';
import {
  ContainerTestimoni,
  JobProfile,
  Testimoni,
  ProfileTestimoni,
  ImageTestimoni,
} from './styled';
function CardTestimoni(props) {
  const { testimoni } = props;
  return (
    <>
      <ImageTestimoni image={testimoni?.src}></ImageTestimoni>
      <ContainerTestimoni>
        <Testimoni>{testimoni.testimoni}</Testimoni>
        <div>
          <ProfileTestimoni>{testimoni.profile}</ProfileTestimoni>
          <JobProfile>{testimoni.job}</JobProfile>
        </div>
      </ContainerTestimoni>
    </>
  );
}

CardTestimoni.propTypes = {};

export default CardTestimoni;
