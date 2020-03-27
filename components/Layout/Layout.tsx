import React from 'react';
import Header from '../Header/Header';
import Head from "next/head";
import '../../styles/styles.sass';
import '../../styles/styles.css';
import { NextPage } from "next";
import Footer from "../Footer/Footer";

interface Props extends React.HTMLProps<HTMLDivElement> {
  language: 'cs' | 'pl';
}

const Layout: NextPage<Props> = (props: Props) => (
  <>
    <Head>
      <title>Mgr. Jolanta Tarabová – FairTranslations</title>
      <link href="https://fonts.googleapis.com/css?family=Merriweather:300,400,700&display=swap&subset=latin-ext" rel="stylesheet" />
    </Head>

    <Header language={props.language} />

    <hr className="navbar-divider" />

    <section className="section">
      <div className="container is-fluid">{props.children}</div>
    </section>

    <hr className="navbar-divider" />

    <Footer />
  </>
);

export default Layout;