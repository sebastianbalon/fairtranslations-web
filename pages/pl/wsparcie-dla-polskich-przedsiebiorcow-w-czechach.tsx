import React from "react";
import Layout from "../../components/Layout/Layout";
import { NextPage } from "next";

const Index: NextPage = () => (
  <Layout language="pl">
    <div className="content">
      <h1 className="title is-3">
        Wsparcie dla polskich przedsiębiorców w Czechach
      </h1>

      <p>
        <strong>
          Szanowni Państwo, zamierzają Państwo prowadzić działalność gospodarczą
          w Czechach?
        </strong>
      </p>

      <p>
        Pomogę ze zdobyciem informacji dotyczących tej działalności. Sporządzę
        tłumaczenia przysięgłe dokumentów wymaganych przez czeskie urzędy. Będę
        towarzyszyła Państwu w załatwianiu spraw wprost w czeskim urzędzie.
      </p>

      <p>Wizyta u czeskiego notariusza – z chęcią będę Państwu towarzyszyć.</p>

      <p>Tłumaczenie decyzji organu – również bez problemu.</p>

      <p>
        Potrzebują Państwo bardziej szczegółowych informacji ? Proszę o kontakt!
      </p>
      <p>
        Warunki ewentualnej współpracy możemy omówić telefonicznie, e-mailem lub
        osobiście.
      </p>
    </div>
  </Layout>
);

export default Index;
