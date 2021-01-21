import React from 'react';
import PageLayout from 'components/organisms/PageLayout';

import './App.css';
import '../../index.css';
import Headers from 'components/organisms/Headers';
import Collaboration from 'components/organisms/InCollaboration';
import {TagLine} from "../../components/organisms/TagLine";
import {AdsTrainer} from "../../components/organisms/AdsTrainer";

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
          <Collaboration />
          <AdsTrainer />
        </header>
      </div>
    </PageLayout>
  );
}
