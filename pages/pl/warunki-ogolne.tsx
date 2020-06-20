import React from "react";
import Layout from "../../components/Layout/Layout";
import { NextPage } from "next";

const Index: NextPage = () => (
  <Layout language="pl">
    <div className="content">
      <h1 className="title is-3">Warunki ogólne</h1>
      <h2 className="subtitle is-5">Przyjęcie zlecenia</h2>

      <strong>Forma przekazania</strong>
      <ul>
        <li>pocztą elektroniczną (e-mailem)</li>
        <li>faksem</li>
        <li>pocztą tradycyjną</li>
        <li>przesyłką kurierską</li>
        <li>osobiście</li>
      </ul>

      <h2 className="subtitle is-5">Realizacja zlecenia</h2>
      <p>
        Zazwyczaj 5-6 stron znormalizowanych dziennie (termin realizacji
        zlecenia nie obejmuje dnia złożenia zamówienia i dnia przekazania
        gotowego tłumaczenia, świąt, weekendów)
      </p>

      <h2 className="subtitle is-5">Przekazanie gotowego tłumaczenia</h2>
      <p>
        Tłumaczenie zostanie przekazane w wybrany przez Państwa sposób i w
        uzgodnionym terminie.
      </p>

      <h2 className="subtitle is-5">Zapłata za tłumaczenie</h2>
      <p>
        <strong>Możliwości:</strong>
      </p>
      <ul>
        <li>przelewem na konto w czeskim banku</li>
        <li>rzelewem na konto w polskim banku</li>
        <li>gotówką, osobiście przy odbiorze tłumaczenia</li>
      </ul>

      <p>
        <strong>Ważne:</strong>
      </p>
      <p>
        Pierwsze zamówienie wykonuję po zapłaceniu faktury zaliczkowej lub
        faktury pro forma. W razie następnych zleceń wystawiam faktury z
        terminem płatności 7 dni. W przypadku stałej współpracy fakturuję
        zlecenia raz w miesiącu, a termin płatności wynosi 21 dni.
      </p>

      <h2 className="subtitle is-5">Poufność informacji</h2>
      <p>
        Gwarantuję Państwu przechowywanie Państwa informacji w bezpieczny sposób
        i zachowanie ich poufności.
      </p>
    </div>
  </Layout>
);

export default Index;
