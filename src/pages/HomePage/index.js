import React from 'react';
import PageLayout from 'components/organisms/PageLayout';
import Button from 'components/atoms/Button';

import '../../index.css';
import Headers from 'components/organisms/Headers';
import Collaboration from 'components/organisms/InCollaboration';

export default function HomePage() {
  // SEO metadata
  const seo = {
    title: 'Beranda',
    description:
      'Rencanakan dan bangun karir Anda bersama Terampil. Temukan berbagai training terbaik yang dapat membantu Anda meraih jenjang karir dambaan.',
    canonical: null,
  };

  return (
    <PageLayout seo={seo}>
      <Headers />
      <h1>Learn anytime, anywhere, at your own pace.</h1>
      <Button primary large>
        View Plan
      </Button>
      <Button secondary large>
        Start Free Trial
      </Button>
      <Button primary medium>
        Daftar
      </Button>
      <Button secondary medium>
        Masuk
      </Button>
      <Button primary large>
        Mulai berlangganan
      </Button>

      <Collaboration />
    </PageLayout>
  );
}
