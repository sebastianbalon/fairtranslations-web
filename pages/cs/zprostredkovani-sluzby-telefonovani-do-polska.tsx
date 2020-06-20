import React from "react";
import Layout from "../../components/Layout/Layout";
import { NextPage } from "next";

const Index: NextPage = () => (
  <Layout language="cs">
    <div className="content">
      <h1 className="title is-3">
        Zprostředkování služby telefonování do Polska
      </h1>

      <p>
        Potřebujete zavolat do Polska, zjistit nějakou informaci a nemáte
        dostačující znalost polského jazyka? Nevadí. Zavolám namísto Vás.
      </p>

      <p>Napište komu, kdy a v jaké záležitosti potřebujete zavolat.</p>

      <p>
        Zavolám do Polska na Vámi uvedené telefonní číslo a stručný výsledek
        rozhovoru s nejdůležitějšími informacemi Vám pošlu písemně na e-mail.
      </p>

      <p>
        Služba není drahá, za minutu hovoru cca 10 korun bez DPH – cena hovoru
        do Polska prostřednictvím mého telefonního operátora je 10 Kč (přikládám
        kopii výpisu). Minimální účtovací jednotka je 10 min. Musím se seznámit
        s Vaším požadavkem a zpracovat jej, teprve pak telefonuji
      </p>
    </div>
  </Layout>
);

export default Index;
