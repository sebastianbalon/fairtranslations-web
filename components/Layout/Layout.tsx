import React from 'react';
import Header from '../Header/Header';
import Head from "next/head";
import '../../styles/styles.sass';
import '../../styles/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

interface Props extends React.HTMLProps<HTMLDivElement> {}

const Layout = (props: Props) => (
  <>
    <Head>
      <title>Mgr. Jolanta Tarabová – FairTranslations</title>
      <link href="https://fonts.googleapis.com/css?family=Merriweather:300,400,700&display=swap&subset=latin-ext" rel="stylesheet" />
    </Head>

    <Header />

    <section className="section">
      <div className="container is-fluid">{props.children}</div>
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

        <div className="column has-text-grey has-text-right">
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