import React from "react";
import Layout from "../../components/Layout/Layout";
import { NextPage } from "next";

const Index: NextPage = () => (
  <Layout language="cs">
    <div className="content">
      <h1 className="title is-3">Všeobecné podmínky</h1>
      <h2 className="subtitle is-5">Příjem zakázek</h2>

      <strong>Forma předání:</strong>
      <ul>
        <li>elektronickou poštou (e-mailem)</li>
        <li>faxem</li>
        <li>prostřednictvím České pošty</li>
        <li>prostřednictvím kurýra</li>
        <li>osobně</li>
      </ul>

      <h2 className="subtitle is-5">Zpracování zakázky</h2>
      <p>
        Obvykle cca 5-10 NS za den (do termínu zpracování se nepočítá den
        přijetí a odevzdání překladu, svátky, víkendy).
      </p>

      <h2 className="subtitle is-5">Předávání zakázek</h2>
      <p>
        Překlad bude odevzdán Vámi požadovaným způsobem a v odsouhlaseném
        termínu.
      </p>

      <h2 className="subtitle is-5">Platba za překlad</h2>
      <strong>Možnosti:</strong>
      <ul>
        <li>bankovním převodem</li>
        <li>hotově, osobně při převzetí objednávky</li>
      </ul>

      <strong>Důležité:</strong>
      <p>
        První objednávku vyhotovím po uhrazení zálohové faktury nebo faktury
        proforma. Na další zakázky vystavuji faktury s termínem splatnosti 7
        dní. V případě stálé spolupráce je fakturace jednou měsíčně, a termín
        splatnosti je 21 dní.
      </p>

      <h2 className="subtitle is-5">Důvěrnost informací</h2>
      <p>
        Zaručuji Vám uchování informací bezpečným způsobem a dodržování
        důvěrnosti získaných informací.
      </p>
    </div>
  </Layout>
);

export default Index;
