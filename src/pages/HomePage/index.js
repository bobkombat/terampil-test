import React from 'react';
import PageLayout from 'components/organisms/PageLayout';
import Button from 'components/atoms/Button';

import logo from '../../logo.svg';
import './App.css';
import '../../index.css';
import InputComponent from 'components/atoms/Input/Input';
import Headers from 'components/organisms/Headers';
import Dropdown from 'components/atoms/Dropdown';
import Collaboration from 'components/organisms/InCollaboration';

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
          {/*<h1>Learn anytime, anywhere, at your own pace.</h1>*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1>Learn anytime, anywhere, at your own pace.</h1>*/}
          <TagLine />
          {/*<a*/}
          {/*  className="App-link"*/}
          {/*  href="https://reactjs.org"*/}
          {/*  target="_blank"*/}
          {/*  rel="noopener noreferrer"*/}
          {/*>*/}
          {/*  Learn React*/}
          {/*</a>*/}
          {/*<Button primary large>*/}
          {/*  View Plan*/}
          {/*</Button>*/}
          {/*<Button secondary large>*/}
          {/*  Start Free Trial*/}
          {/*</Button>*/}
          {/*<Button primary medium>*/}
          {/*  Daftar*/}
          {/*</Button>*/}
          {/*<Button secondary medium>*/}
          {/*  Masuk*/}
          {/*</Button>*/}
          {/*<Button primary large>*/}
          {/*  Mulai berlangganan*/}
          {/*</Button>*/}
          {/*<InputComponent />*/}

          {/*<Dropdown>Kategori</Dropdown>*/}
          <Collaboration />
        </header>
      </div>
    </PageLayout>
  );
}
