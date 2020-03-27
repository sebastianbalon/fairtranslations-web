import React, {CSSProperties} from 'react';
import Link from 'next/link';
import {NextPage} from "next";

const Styles: { [key: string]: CSSProperties } = {

};

const Header: NextPage = () => (
  <div className="header">
    <nav className="navbar navbar-expand-lg navbar-light">

      <Link href="/p/o-firme">
        <a className="navbar-brand">
          <img src="/images/logo.jpg" width="100" height="100" />
          <h1 style={{ display: 'inline-block' }}>Mgr. Jolanta Tarabová</h1>
        </a>
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
              aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div style={{ flexBasis: '100%', width: 0 }} className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link href="/p/o-firme">
              <a className="nav-link">O firmě</a>
            </Link>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle">Překlady a tlumočení</a>
            <div className="dropdown-menu">
              <Link href="/p/preklady"><a className="dropdown-item">Překlady</a></Link>
              <Link href="/p/tlumoceni"><a className="dropdown-item">Tlumočení</a></Link>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle">Jiné služby</a>
            <div className="dropdown-menu">
              <Link href="/p/zprostredkovani-sluzby-telefonovani-do-polska"><a className="dropdown-item">Zprostředkování služby telefonování do Polska</a></Link>
              <Link href="/p/podpora-podnikatelum"><a className="dropdown-item">Podpora podnikatelům</a></Link>
              <Link href="/p/zalozeni-firmy-v-polsku"><a className="dropdown-item">Založení firmy v Polsku</a></Link>
            </div>
          </li>

          <li className="nav-item">
            <Link href="/p/podminky-a-ceny">
              <a className="nav-link">Podmínky a ceny</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/p/kontakt">
              <a className="nav-link">Kontakt</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
);


export default Header;

/*
<div style={{ height: 60, overflow: 'hidden', width: '100%' }}>
      <svg viewBox="0 0 500 125" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
        <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: 'white' }}></path>
      </svg>
    </div>
* */