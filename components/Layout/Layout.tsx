import React, {CSSProperties} from 'react';
import Header from '../Header/Header';
import Head from "next/head";

interface Props extends React.HTMLProps<HTMLDivElement> {}

const Styles: { [key: string]: CSSProperties } = {
};

const Layout = (props: Props) => (
  <>
    <Head>
      <title>Mgr. Jolanta Tarabová – FairTranslations</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,400&display=swap&subset=latin-ext" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap&subset=latin-ext" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap&subset=latin-ext" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Merriweather:300,400,900&display=swap&subset=latin-ext" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,900,900i&display=swap&subset=latin-ext" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Lora:400,700|Montserrat:300&subset=latin-ext" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Chivo:300,700|Playfair+Display:700i" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Lato:300,700|Prata" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:900|Work+Sans:300" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Archivo:500|Open+Sans:300,700" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Roboto:300,700" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Quicksand:300,500" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Cardo:400,700|Oswald" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Crimson+Text|Work+Sans:400,700" rel="stylesheet" />
      <style>
        {`
          body {
            // font-family: Roboto, sans-serif;
            // font-family: 'Montserrat', sans-serif;
            // font-weight: 400;
            line-height: 28px;
            // background: linear-gradient(180deg, #fff 0%, rgba(255,255,255,0) 100%),#FFFBF2;
            // background: rgb(251, 242, 217);
            // background: #FFFBF2;
            background: rgb(255, 255, 255);
            padding-top: 180px;
            margin: 0;
            color: rgb(80, 53, 13);
          }
          .navbar-brand {
            /*font-family: 'Merriweather', serif;
            text-transform: none;
            font-size: 20pt;*/
          }
          h1, h2, h3 {
            //font-family: Roboto, sans-serif;
            //font-family: 'IBM Plex Mono', monospace;
            //font-family: 'Playfair Display', serif;
            //font-family: 'Merriweather', serif;
            //font-weight: 100;
            padding-bottom: 10px;
            //color: #49a3af;
            color: rgb(212, 141, 34);
          }
          h1 {
            font-size: 26px;
          }
          h2 {
            font-size: 22px;
            color: rgb(80, 53, 13);
          }
          .nav-link {
            font-size: .875rem;
            text-transform: uppercase;
            // text-transform: uppercase;
          }
          .navbar {
            height: 100px;
            background: white;
          }
          .header {
            top: 0;
            right: 0;
            left: 0;
            position: fixed;
            z-index: 1000;
            // background-color: #FFFBF2;
            // box-shadow: 0px 30px 90px 0px rgba(51,51,51,.1);
            // background: rgb(255,255,255);
            // background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(251,242,217,1) 100%);
          }
          section {
            background: transparent;
          }
          body {
           font-family: 'Roboto', sans-serif;
          }

          h1, h2, h3, h4, h5, h6 {
           font-family: 'Montserrat', serif;
           font-weight: 400;
          }
        `}
      </style>
    </Head>

    <Header />
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mx-auto">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Layout;