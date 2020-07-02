import React from "react";
import Layout from "../../components/Layout/Layout";
import { NextPage } from "next";

const Index: NextPage = () => (
  <Layout language="cs">
    <div className="content">
      <h1 className="title is-3">
        Tlumočnický doprovod na obchodních jednáních v Polsku
      </h1>

      <p>
        Máte jednání s novým nebo stávajícím zákazníkem, obchodním partnerem,
        dodavatelem v Polsku?
      </p>

      <p>Potřebujete tlumočnický doprovod na tomto jednání?</p>

      <p>
        Pokud máte zájem o tyto služby, napište prosím, obratem Vám pošlu
        nabídku.
      </p>
    </div>
  </Layout>
);

export default Index;
