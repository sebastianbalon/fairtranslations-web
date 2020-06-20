import React from 'react';
import Layout from '../../components/Layout/Layout';
import { NextPage } from 'next';

const Index: NextPage = () => (
  <Layout language="cs">
    <div className="content">
      <h1 className="title is-3">Podpora podnikání v Polsku</h1>

      <p><strong>Hodláte podnikat v Polsku?</strong></p>
      <ul>
        <li>Pomohu Vám získat informace týkající se provozování této činnosti.</li>
        <li>Vyhotovím ověřené překlady dokladů vyžadovaných polskými orgány.</li>
        <li>Pokud polské orgány nepřijímají soudní překlad vyhotovený českým soudním tlumočníkem (není to pravidlem, některé úřady respektují soudní překlad vyhotovený českým soudním tlumočníkem, jiné zase ne), zajistím nebo zprostředkuji překlad polského soudního tlumočníka.</li>
        <li>Doprovodím Vás na polský úřad při vyřizování věci.</li>
        <li>Doprovodím Vás k polskému notáři za účelem sepsání notářského zápisu nebo jakékoliv jiné listiny.</li>
        <li>Překlad rozhodnutí polského orgánu – ani toto není problém - vyhotovím.</li>
        <li>Potřebujete podrobnější informace? Kontaktujte mě.</li>
        <li>Telefonicky, e-mailem nebo osobně projednáme podmínky případné spolupráce.</li>
      </ul>
    </div>
  </Layout>
);

export default Index;