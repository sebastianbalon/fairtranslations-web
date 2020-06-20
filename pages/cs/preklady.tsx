import React from 'react';
import Layout from '../../components/Layout/Layout';
import { NextPage } from 'next';

const Index: NextPage = () => (
  <Layout language="cs">
    <div className="content">
      <h1 className="title is-3">Překlady</h1>

      <p>Nabízím služby v rozsahu obyčejných či ověřených (soudních) překladů.</p>

      <h2 className="subtitle is-5">Obyčejný překlad</h2>

      <p><strong>Způsoby dodání:</strong></p>
      <ul>
        <li>e-mailem</li>
        <li>poštou</li>
        <li>osobně</li>
      </ul>

      <p><strong>Způsoby odevzdání hotového překladu:</strong></p>
      <ul>
        <li>e-mailem</li>
        <li>poštou</li>
        <li>osobní převzetí zákazníkem</li>
      </ul>

      <p>Zúčtovací jednotka – normostrana – stránka 1800 znaků ve Wordu.</p>

      <h2 className="subtitle is-5">Ověřené (soudní) překlady</h2>

      <p>Způsob dodání: osobně nebo poštou</p>

      <p>Pro vyhotovení ověřeného překladu potřebuji originál nebo notářsky ověřenou kopii dokumentu. Překlad se spojuje a váže šňůrkou s originálem nebo s notářsky ověřenou kopií, připojuje se kulaté razítko soudního tlumočníka, tlumočnická doložka a podpis.</p>

      <p>Nejčastěji se vyhotovují soudní překlady následujících dokumentů:</p>
      <ul>
        <li>rodný list</li>
        <li>oddací list</li>
        <li>úmrtní list</li>
        <li>výpis z obchodního rejstříku</li>
        <li>vysvědčení o maturitní zkoušce</li>
        <li>potvrzení IČ</li>
        <li>osvědčení o přidělení DIČ</li>
        <li>výpis z rejstříku trestů</li>
        <li>živnostenský list</li>
        <li>diplom</li>
        <li>notářský zápis</li>
        <li>smlouva</li>
        <li>daňové přiznání</li>
        <li>jiné</li>
      </ul>

      <p>Jelikož by vázání překladu mělo být neodlučitelné, u některých důležitých dokumentů (diplomy, rodné listy atd.), doporučuje se dodat místo originálního dokumentu jeho notářskou kopii.</p>

      <p><strong>Lhůty vyhotovení:</strong></p>
      <ul>
        <li>standardní</li>
        <li>urychlené</li>
        <li>expresní</li>
      </ul>
    </div>
  </Layout>
);

export default Index;