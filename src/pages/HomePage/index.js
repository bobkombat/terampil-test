import React from 'react';
import PageLayout from 'components/organisms/PageLayout';

import './App.css';
import '../../index.css';
import Headers from 'components/organisms/Headers';
import { TagLine } from '../../components/organisms/TagLine';
import { AdsTrainer } from '../../components/organisms/AdsTrainer';
import Video from 'components/atoms/Video';
import Collaboration from 'components/organisms/Collaboration';
import PopularTrainer from 'components/organisms/PopularTrainer/PopularTrainer';
import { CardTraining } from '../../components/organisms/Cards/CardTraining';
import UniqueValue from 'components/organisms/UniqueValue';
import Cooperation from 'components/organisms/Cooperation';
import Testimoni from 'components/organisms/Testimoni';
import NewTraining from 'components/organisms/NewTraining';
import { PopolarTraining } from '../../components/organisms/PopularTraining';
import { BannerAds } from '../../components/organisms/BannerAds';
import FAQ from '../../components/organisms/FAQ';
import ForumTeraktif from 'components/organisms/ForumTeraktif';

import VideoAdds from 'components/organisms/VideoAdds';

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
          <BannerAds />
          <Video />
          <ForumTeraktif />
          <PopularTrainer />
          <Collaboration />
          <Testimoni />
          <NewTraining />
          <UniqueValue />
          <Cooperation />
          <AdsTrainer />
          <PopolarTraining />
          <FAQ />
        </header>
      </div>
    </PageLayout>
  );
}
