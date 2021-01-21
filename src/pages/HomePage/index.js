import React from 'react';
import PageLayout from 'components/organisms/PageLayout';
import Button from 'components/atoms/Button';

import '../../index.css';
import Headers from 'components/organisms/Headers';
import Collaboration from 'components/organisms/InCollaboration';
import Video from 'components/atoms/Video';

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

      <Video light loop playing style={{width: '100%'}} url="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"/>

      <Collaboration />
    </PageLayout>
  );
}
