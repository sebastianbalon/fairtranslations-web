import React from "react";
import Header from "../Header/Header";
import Head from "next/head";
import { NextPage } from "next";
import Card from "../Card/Card";

interface Props extends React.HTMLProps<HTMLDivElement> {
  language: "cs" | "pl";
}

const description = {
  cs: "",
  pl: "",
};

const Layout: NextPage<Props> = (props: Props) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Mgr. Jolanta Tarabová – FairTranslations</title>
      <meta name="description" content={description[props.language]} />
    </Head>

    <Header language={props.language} />

    <hr className="navbar-divider" />

    <section className="section">
      <div className="columns is-reversed-mobile">
        <div className="column is-one-third">
          <Card language={props.language} />
        </div>
        <div className="column">{props.children}</div>
      </div>
    </section>
  </>
);

export default Layout;
