import React from 'react';
import PageLayout from 'components/organisms/PageLayout';

import './App.css';
import { TagLine } from '../../components/organisms/TagLine';
import { AdsTrainer } from '../../components/organisms/AdsTrainer';
import Video from 'components/atoms/Video';
import Collaboration from 'components/organisms/Collaboration';
import PopularTrainer from 'components/organisms/PopularTrainer/PopularTrainer';
import { CardTraining } from '../../components/organisms/Cards/CardTraining';
import UniqueValue from 'components/organisms/UniqueValue';
import Cooperation from 'components/organisms/Cooperation';
import FAQ from 'components/organisms/FAQ';

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

      <Video
        light
        loop
        playing
        style={{ width: '100%' }}
        url="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
      />

      <Collaboration />
      <PopularTrainer />
      <AdsTrainer />
      <UniqueValue />
      <Cooperation />
      <CardTraining />
      <FAQ />
    </PageLayout>
  );
}
