import React, {CSSProperties} from 'react';
import Header from '../Header/Header1';
import Head from "next/head";
import '../../styles/styles.sass';
import '../../styles/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

interface Props extends React.HTMLProps<HTMLDivElement> {}

const Styles: { [key: string]: CSSProperties } = {
};

const Layout = (props: Props) => (
  <>
    <Head>
      <title>Mgr. Jolanta Tarabová – FairTranslations</title>
      <link href="https://fonts.googleapis.com/css?family=Merriweather:300,400,700&display=swap&subset=latin-ext" rel="stylesheet" />
      <style>
        {`/*
          body {
            font-family: 'Merriweather', serif;
            font-weight: 300;
            font-size: 15px;
            line-height: 26px;
            color: rgba(0, 0, 0, 0.8);
          }
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Merriweather', serif;
            font-weight: 700;
          }
          h1 {
            font-size: 30px;
            color: #FF662E;
            display: inline-block;
            position: relative;
          }
          h2 {
            font-size: 19px;
          }
          #header-logo {
            display: flex;
            align-items: center;
          }
          #header-logo img {
            display: inline-block;
          }
          #header-subtitle {
            // border-left: 100px solid #FF662E;
            // padding-left: 5px;
            padding-right: 2px;
            font-size: 14px;
            line-height: 17px;
            right: 0;
            position: absolute;
            color: rgba(0, 0, 0, 0.8);
          }*/
        `}
      </style>
    </Head>

    <Header />

    <section className="section">
      <div className="container content">{props.children}</div>
    </section>

    <hr className="navbar-divider" />

    <footer className="footer">
      <div className="columns is-gapless is-size-6">
        <div className="column is-1" />

        <div className="column is-8 has-text-grey">
          <img style={{ opacity: 0.5 }} src="/images/logo-mono.svg" alt="FairTranslations | Mgr. Jolanta Tarabová" width="200" height="51" />

          <p>Mgr. Jolanta Tarabová</p>
          <p>+420 737 961 376</p>
        </div>

        <div className="column has-text-grey">
          <a className="icon is-large has-text-grey" href="https://www.facebook.com/FairTranslations/">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>

          <a className="icon is-large has-text-grey" href="https://twitter.com/fairtranslation">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>

        <div className="column is-1" />
      </div>
    </footer>
  </>
);

export default Layout;