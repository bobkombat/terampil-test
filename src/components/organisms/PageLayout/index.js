import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const PageLayout = ({ seo, children }) => {
  const { title, description } = seo;

  return (
    <React.Fragment>
      <Helmet
        titleAttributes={`Terampil${title ? ` \u2022 ${title}` : ''}`}
        defaultTitle={`Terampil${title ? ` \u2022 ${title}` : ''}`}
      >
        <meta name="description" description={description} />
      </Helmet>

      {children}
    </React.Fragment>
  );
};

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
  seo: PropTypes.object,
};

export default PageLayout;
