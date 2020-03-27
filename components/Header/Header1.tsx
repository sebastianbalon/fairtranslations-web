import React, {CSSProperties} from 'react';
import Link from 'next/link';
import {NextPage} from "next";

const Styles: { [key: string]: CSSProperties } = {

};

/*
<div id="header-logo">
      <img src="/images/logo.jpg" width="100" height="100" />
      <h1>
        FairTranslations
        <div id="header-subtitle">Mgr. Jolanta Tarabová</div>
      </h1>
    </div>
* */

const Header: NextPage = () => (
  <>
  <nav className="navbar is-white">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <img src="/images/logo1.svg" alt="FairTranslations | Mgr. Jolanta Tarabová" width="331" height="85" />
      </a>
    </div>

    <div className="navbar-menu">
      <div className="navbar-end">

        <Link href="/p/o-firme">
          <a className="navbar-item">O firmě</a>
        </Link>

        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">Překlady a tlumočení</a>

          <div className="navbar-dropdown">
            <Link href="/p/preklady"><a className="navbar-item">Překlady</a></Link>
            <Link href="/p/tlumoceni"><a className="navbar-item">Tlumočení</a></Link>
          </div>
        </div>

        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">Jiné služby</a>

          <div className="navbar-dropdown">
            <Link href="/p/zprostredkovani-sluzby-telefonovani-do-polska"><a className="navbar-item">Zprostředkování služby telefonování do Polska</a></Link>
            <Link href="/p/podpora-podnikatelum"><a className="navbar-item">Podpora podnikatelům</a></Link>
            <Link href="/p/zalozeni-firmy-v-polsku"><a className="navbar-item">Založení firmy v Polsku</a></Link>
          </div>
        </div>

        <Link href="/p/podminky-a-ceny">
          <a className="navbar-item">Podmínky a ceny</a>
        </Link>

        <Link href="/p/kontakt">
          <a className="navbar-item">Kontakt</a>
        </Link>
      </div>
    </div>
  </nav>
  <hr className="navbar-divider" />
  </>
);


export default Header;