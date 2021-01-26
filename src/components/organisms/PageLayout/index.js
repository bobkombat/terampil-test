import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Headers from '../Headers';
import Footer from '../Footer';

const PageLayout = ({ seo, children }) => {
  const { title, description } = seo;

  return (
    <React.Fragment>
      <Helmet defaultTitle={`Terampil${title ? ` \u2022 ${title}` : ''}`}>
        <meta name="description" description={description} />
      </Helmet>
      <Headers />
      {children}

      <Footer />
    </React.Fragment>
  );
};

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
  seo: PropTypes.object,
};

export default PageLayout;
