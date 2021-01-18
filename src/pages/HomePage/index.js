import React from 'react';
import PageLayout from 'components/organisms/PageLayout';
import Button from 'components/atoms/Button';

import logo from '../../logo.svg';
import './App.css';
import '../../index.css';
<<<<<<< HEAD
import InputComponent from 'components/atoms/Input/Input';
import Headers from 'components/organisms/Headers';
=======
import Dropdown from 'components/atoms/Dropdown';
>>>>>>> a474ec99f9f51428b50458dff4e4149d849e061d

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Learn anytime, anywhere, at your own pace.</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
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
<<<<<<< HEAD
          <InputComponent />
=======
          <Dropdown>Kategori</Dropdown>
>>>>>>> a474ec99f9f51428b50458dff4e4149d849e061d
        </header>
      </div>
    </PageLayout>
  );
}
