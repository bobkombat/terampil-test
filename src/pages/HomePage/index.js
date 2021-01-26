import React from 'react';
import PageLayout from 'components/organisms/PageLayout';
import './App.css';
import '../../index.css';
// component
import {
  VideoAdds,
  TagLine,
  Headers,
  Collaboration,
  PopularTraining,
  UniqueValue,
  PopularTrainer,
  ForumTeraktif,
  NewTraining,
  Testimoni,
  FAQ,
  AdsTrainer,
  Cooperation,
  BannerAds,
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
      <Headers />
      <div className="App">
        <header className="App-header">
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
        </header>
      </div>
    </PageLayout>
  );
}
