import React, { useEffect, useState } from 'react';
import PageLayout from 'components/organisms/PageLayout';

import { TagLine } from '../../components/organisms/TagLine';
import { AdsTrainer } from '../../components/organisms/AdsTrainer';
import Collaboration from 'components/organisms/Collaboration';
import PopularTrainer from 'components/organisms/PopularTrainer';
import UniqueValue from 'components/organisms/UniqueValue';
import Cooperation from 'components/organisms/Cooperation';
import Testimoni from 'components/organisms/Testimoni';
import NewTraining from 'components/organisms/NewTraining';
import PopularTraining from 'components/organisms/PopularTraining';
import { BannerAds } from '../../components/organisms/BannerAds';
import FAQ from '../../components/organisms/FAQ';
import ForumTeraktif from 'components/organisms/ForumTeraktif';

import VideoAdds from 'components/organisms/VideoAdds';
import { checkMobile } from 'utils/checkMobile';

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  // SEO metadata
  const seo = {
    title: 'Beranda',
    description:
      'Rencanakan dan bangun karir Anda bersama Terampil. Temukan berbagai training terbaik yang dapat membantu Anda meraih jenjang karir dambaan.',
    canonical: null,
  };

  useEffect(() => {
    setIsMobile(checkMobile());
  }, []);

  return (
    <PageLayout seo={seo} mobile={isMobile}>
      <TagLine />
      <VideoAdds />
      <Collaboration />
      <PopularTrainer mobile={isMobile} />
      <UniqueValue />
      <Cooperation />
      {/* <PopularTraining mobile={isMobile} /> */}
      <BannerAds />
      <ForumTeraktif />
      {/* <NewTraining mobile={isMobile} /> */}
      {/* <Testimoni mobile={isMobile} /> */}
      <FAQ />
      <AdsTrainer />
    </PageLayout>
  );
}
