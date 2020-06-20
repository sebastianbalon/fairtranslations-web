import React from "react";
import Layout from "../../components/Layout/Layout";
import { NextPage } from "next";

const Index: NextPage = () => (
  <Layout language="cs">
    <div className="content">
      <h1 className="title is-3">Tlumočení</h1>
      <p>
        Nabízím také služby obyčejného a soudního tlumočení. Jsem soudním
        tlumočníkem jazyka polského, čili tlumočím u soudu, na policii, na
        státním zastupitelství, na úřadech.
      </p>

      <p>
        Součástí nabídky jsou také tlumočení pro firmy, soukromé osoby apod.
      </p>
    </div>
  </Layout>
);

export default Index;
