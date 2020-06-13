import React from 'react';
import Layout from '../../components/Layout/Layout';
import { NextPage } from 'next';

const Index: NextPage = () => (
  <Layout language="cs">
    <div className="content">
      <h1 className="title is-3">Ceník</h1>

      <p>Cena je stanovena na základě rozsahu, odbornosti, obtížnosti a doby zpracování.</p>

      <p>Přesná cena za překlad bude sdělena po přeložení, tzn. po zjištění skutečného množství přeloženého textu.
        Před provedením překladu Vám sdělím orientační cenu, tzn. maximální cenu, která v okamžiku vyúčtování překladu může být nižší, ale nikdy vyšší, než byla uvedená orientační cena.</p>

      <p>Cena překladu se odvíjí také od určení druhu textu: obyčejný, pro potřeby firem a osob, nebo text určený k publikaci, tisku apod., umístění na web apod.</p>

      <strong>Slevy:</strong>
      <p>V případě dlouhodobé spolupráce a určitých měsíčních obratů nabízím slevy.</p>

      <p>Účtovací jednotkou je normostrana, tj. 1 800 znaků ve Wordu.
        Minimální účtovací jednotkou je 1 normostrana.</p>

      <p>Minimální účtovací jednotkou u tlumočení jsou 4 hodiny.
        V případě tlumočení trvajícího více než 4 hodiny fakturuji cenu za celý den tlumočení.</p>


      <p>Pošlete proto poptávku, a já připravím a pošlu nabídku.</p>
    </div>
  </Layout>
);

export default Index;