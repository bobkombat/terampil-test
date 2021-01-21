import React from 'react';
import PageLayout from 'components/organisms/PageLayout';
import Button from 'components/atoms/Button';

import '../../index.css';
import Dropdown from 'components/atoms/Dropdown';
import Collaboration from 'components/organisms/Collaboration';
import PopularTrainer from 'components/organisms/PopularTrainer/PopularTrainer';
import UniqueValue from 'components/organisms/UniqueValue';
import Cooperation from 'components/organisms/Cooperation';

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
      {/* <Headers /> */}
      {/* <Dropdown>Kategori</Dropdown> */}
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
      {/* <InputComponent /> */}
      {/* <Dropdown>Kategori</Dropdown> */}
      <Collaboration />
      <PopularTrainer />
      <UniqueValue />
      <Cooperation />
    </PageLayout>
  );
}
