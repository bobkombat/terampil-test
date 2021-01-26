import React from 'react';
import PropTypes from 'prop-types';
import {
  CardContainer,
  ContainerTestimoni,
  JobProfile,
  Testimoni,
  ProfileTestimoni,
  ImageTestimoni,
} from './styled';
function CardTestimoni(props) {
  const { testimoni } = props;
  return (
    <CardContainer>
      <ImageTestimoni image={testimoni?.src} />
      <ContainerTestimoni>
        <Testimoni>{testimoni.testimoni}</Testimoni>
        <div>
          <ProfileTestimoni>{testimoni.profile}</ProfileTestimoni>
          <JobProfile>{testimoni.job}</JobProfile>
        </div>
      </ContainerTestimoni>
    </CardContainer>
  );
}

CardTestimoni.propTypes = {};

export default CardTestimoni;
