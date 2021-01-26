import React, { useEffect, useState } from 'react';
import PageLayout from 'components/organisms/PageLayout';

// component
import {
    VideoAdds,
    TagLine,
    Collaboration,
    UniqueValue,
    PopularTrainer,
    ForumTeraktif,
    FAQ,
    AdsTrainer,
    Cooperation,
    BannerAds, PopularTraining, NewTraining,
} from 'components/organisms';
import { checkMobile } from 'utils/checkMobile';
import {Testimoni} from "../../components/molecule/MainTestimoni/styled";

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
      <PopularTraining  />
      <BannerAds />
      <ForumTeraktif />
      <NewTraining mobile={isMobile} />
      <Testimoni mobile={isMobile} />
      <FAQ />
      <AdsTrainer />
    </PageLayout>
  );
}
