import React from 'react';
import { NextPage } from "next";
import NavbarLink from "./NavbarLink/NavbarLink";
import NavbarDropdown from "./NavbarDropdown/NavbarDropdown";

interface Props extends React.HTMLProps<HTMLDivElement> {
  language: 'cs' | 'pl';
}

const Header: NextPage<Props> = (props: Props) => (
  <>
  <nav className="navbar is-white">
    <div className="navbar-brand">
      <a className="" href="/">
        <img src="/images/logo1.svg" alt="FairTranslations | Mgr. Jolanta Tarabová" width="331" height="85" />
      </a>
    </div>

    <div className="navbar-menu">
      <div className="navbar-end">
        {props.language === 'cs' ? (
          <>
            <NavbarLink href="/cs/o-firme">O firmě</NavbarLink>
            <NavbarDropdown title="Překlady a tlumočení">
              <NavbarLink href="/cs/preklady">Překlady</NavbarLink>
              <NavbarLink href="/cs/tlumoceni">Tlumočení</NavbarLink>
            </NavbarDropdown>
            <NavbarDropdown title="Jiné služby">
              <NavbarLink href="/cs/zprostredkovani-sluzby-telefonovani-do-polska">Zprostředkování služby telefonování do Polska</NavbarLink>
              <NavbarLink href="/cs/podpora-podnikatelum">Podpora podnikatelům</NavbarLink>
              <NavbarLink href="/cs/zalozeni-firmy-v-polsku">Založení firmy v Polsku</NavbarLink>
            </NavbarDropdown>
            <NavbarLink href="/cs/podminky-a-ceny">Podmínky a ceny</NavbarLink>
            <NavbarLink href="/cs/kontakt">Kontakt</NavbarLink>
          </>
          ) : (
          <>
            <NavbarLink href="/pl/o-firmie">O firmie</NavbarLink>
            <NavbarDropdown title="Tłumaczenia ustne i pisemne">
              <NavbarLink href="/pl/tlumaczenia-pisemne">Tłumaczenia pisemne</NavbarLink>
              <NavbarLink href="/pl/tlumaczenia-ustne">Tłumaczenia ustne</NavbarLink>
            </NavbarDropdown>
            <NavbarDropdown title="Inne usługi">
              <NavbarLink href="/pl/posrednictwo-w-rozmowach-telefonicznych">Pośrednictwo w rozmowach telefonicznych</NavbarLink>
              <NavbarLink href="/pl/wsparcie-dla-osob-prowadzacych-dzialalnosc">Wsparcie dla osób prowadzących działalność</NavbarLink>
            </NavbarDropdown>
            <NavbarLink href="/pl/warunki-i-ceny">Warunki i ceny</NavbarLink>
            <NavbarLink href="/pl/kontakt">Kontakt</NavbarLink>
          </>
          )}

        <NavbarLink href="/cs"><img src="/images/flag-cz.svg" width="28" height="21" /></NavbarLink>
        <NavbarLink href="/pl"><img src="/images/flag-pl.svg" width="28" height="21" /></NavbarLink>
      </div>
    </div>
  </nav>
  </>
);


export default Header;