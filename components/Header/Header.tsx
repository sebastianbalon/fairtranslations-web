import React from "react";
import { NextPage } from "next";
import NavbarLink from "./NavbarLink/NavbarLink";
import NavbarDropdown from "./NavbarDropdown/NavbarDropdown";
import Burger from "./Burger/Burger";

interface Props extends React.HTMLProps<HTMLDivElement> {
  language: "cs" | "pl";
}

const Header: NextPage<Props> = (props: Props) => {
  const [isBurgerActive, setBurgerActive] = React.useState<boolean>(false);

  const onBurgerPressHandler = () => setBurgerActive(!isBurgerActive);

  const title =
    "FairTranslations, Mgr. Jolanta Tarabová, " +
    (props.language === "cs"
      ? "Překlady a tlumočení"
      : "Tłumaczenia ustne i pisemne");

  return (
    <>
      <nav className="navbar is-white">
        <div className="navbar-brand">
          <a className="" href="/">
            <img
              src="/images/logo1.svg"
              width="331"
              height="85"
              title={title}
              alt={title}
            />
          </a>

          <Burger onClick={onBurgerPressHandler} isActive={isBurgerActive} />
        </div>

        <div className={"navbar-menu" + (isBurgerActive ? " is-active" : "")}>
          <div className="navbar-end">
            {props.language === "cs" ? (
              <>
                <NavbarLink href="/cs/o-firme">O firmě</NavbarLink>
                <NavbarDropdown
                  title="Překlady a tlumočení"
                  href="/cs/preklady"
                >
                  <NavbarLink href="/cs/sluzba-elektronickeho-soudniho-prekladu">
                    Novinka – služba elektronického soudního překladu
                  </NavbarLink>
                  <NavbarLink href="/cs/preklady">Překlady</NavbarLink>
                  <NavbarLink href="/cs/tlumoceni">Tlumočení</NavbarLink>
                </NavbarDropdown>
                <NavbarDropdown
                  title="Jiné služby"
                  href="/cs/tlumocnicky-doprovod-na-obchodnich-jednanich-v-polsku"
                >
                  <NavbarLink href="/cs/tlumocnicky-doprovod-na-obchodnich-jednanich-v-polsku">
                    Tlumočnický doprovod na obchodních jednáních v Polsku
                  </NavbarLink>
                  <NavbarLink href="/cs/zprostredkovani-sluzby-telefonovani-do-polska">
                    Zprostředkování služby telefonování do Polska
                  </NavbarLink>
                  <NavbarLink href="/cs/podpora-podnikani-v-polsku">
                    Podpora podnikání v Polsku
                  </NavbarLink>
                </NavbarDropdown>
                <NavbarLink href="/cs/podminky">Podmínky</NavbarLink>
                <NavbarLink href="/cs/cenik">Ceník</NavbarLink>
              </>
            ) : (
              <>
                <NavbarLink href="/pl/o-firmie">O firmie</NavbarLink>
                <NavbarDropdown
                  title="Tłumaczenia ustne i pisemne"
                  href="/pl/tlumaczenia-pisemne"
                >
                  <NavbarLink href="/pl/tlumaczenia-pisemne">
                    Tłumaczenia pisemne
                  </NavbarLink>
                  <NavbarLink href="/pl/tlumaczenia-ustne">
                    Tłumaczenia ustne
                  </NavbarLink>
                </NavbarDropdown>
                <NavbarDropdown
                  title="Inne usługi"
                  href="/pl/posrednictwo-w-rozmowach-telefonicznych-w-czechach"
                >
                  <NavbarLink href="/pl/posrednictwo-w-rozmowach-telefonicznych-w-czechach">
                    Pośrednictwo w rozmowach telefonicznych w Czechach
                  </NavbarLink>
                  <NavbarLink href="/pl/wsparcie-dla-polskich-przedsiebiorcow-w-czechach">
                    Wsparcie dla polskich przedsiębiorców w Czechach
                  </NavbarLink>
                </NavbarDropdown>
                <NavbarLink href="/pl/warunki-ogolne">
                  Warunki ogólne
                </NavbarLink>
                <NavbarLink href="/pl/cennik">Cennik</NavbarLink>
              </>
            )}

            <NavbarLink href="/cs/o-firme">
              <img
                src="/images/flag-cz.svg"
                className="rounded-corners has-shadow"
                width="28"
                height="21"
                title="Česká verze"
                alt="Česká verze"
              />
            </NavbarLink>
            <NavbarLink href="/pl/o-firmie">
              <img
                src="/images/flag-pl.svg"
                className="rounded-corners has-shadow"
                width="28"
                height="21"
                title="Polska wersja"
                alt="Polska wersja"
              />
            </NavbarLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
