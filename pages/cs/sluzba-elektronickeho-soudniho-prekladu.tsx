import React from "react";
import Layout from "../../components/Layout/Layout";
import { NextPage } from "next";

const Index: NextPage = () => (
  <Layout language="cs">
    <div className="content">
      <h1 className="title is-3">
        Novinka – služba elektronického soudního překladu
      </h1>

      <ul>
        <li>
          Elektronický soudní překlad z jazyka <strong>polského</strong> do
          jazyka <strong>českého</strong>
        </li>
        <li>
          Elektronický soudní překlad z jazyka <strong>českého</strong> do
          jazyka <strong>polského</strong>
        </li>
      </ul>

      <h2 className="subtitle is-5">Co je to elektronický soudní překlad?</h2>
      <p>
        Jedná se o{" "}
        <strong>překlad podepsaný kvalifikovaným elektronickým podpisem</strong>{" "}
        a opatřený kvalifikovaným elektronickým časovým razítkem.
      </p>

      <p>
        Překlad je{" "}
        <strong>
          rovnocenný překladu vytištěnému a svázanému s originální listinou
        </strong>
        a opatřenému kulatým razítkem se státním znakem.
      </p>

      <p>
        Přeložená písemnost (originál, původní text) je vložena jako příloha do
        souboru PDF/A spolu s překladatelským úkonem a překladatelskou doložkou.
        Takový překlad neobsahuje kulaté razítko soudního překladatele, ale
        kvalifikovaný elektronický podpis a časové razítko.
      </p>

      <p>
        Elektronický úkon je možné převést do listinné podoby na pobočkách
        CZECHPOINT prostřednictvím tzv. autorizované konverze dokumentů do
        listinné podoby. Překlad Vám vytisknou a připojí konverzní doložku. Cena
        konverze je 30 Kč za stránku.
      </p>

      <h2 className="subtitle is-5">Výhody</h2>
      <ul>
        <li>Úspora času – není nutné chodit na poštu</li>
        <li>Překlad lze použít opakovaně</li>
      </ul>

      <h2 className="subtitle is-5">
        Potřebujete elektronický soudní překlad?
      </h2>
      <p>Můžete si jej jednoduše objednat, stačí:</p>
      <ul>
        <li>naskenovat dokumenty a poslat je na můj e-mail</li>
      </ul>

      <p>
        Po vyhotovení předám hotový překlad prostřednictvím datové schránky nebo
        e-mailu, případně Vám jej uložím na datový nosič, např. flash disk.
      </p>
    </div>
  </Layout>
);

export default Index;
