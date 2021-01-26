import React from 'react';
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
  BannerAds,
  Testimoni,
  PopularTraining,
  NewTraining,
} from 'components/organisms';

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
      <TagLine />
      <VideoAdds />
      <Collaboration />
      <PopularTrainer />
      <UniqueValue />
      <Cooperation />
      <PopularTraining />
      <BannerAds />
      <ForumTeraktif />
      <NewTraining />
      <Testimoni />
      <FAQ />
      <AdsTrainer />
    </PageLayout>
  );
}
