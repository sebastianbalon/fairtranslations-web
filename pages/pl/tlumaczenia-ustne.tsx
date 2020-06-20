import React from "react";
import Layout from "../../components/Layout/Layout";
import { NextPage } from "next";

const Index: NextPage = () => (
  <Layout language="pl">
    <div className="content">
      <h1 className="title is-3">Tłumaczenia ustne</h1>
      <p>
        Oferuję Państwu również usługi w zakresie tłumaczeń ustnych – zwykłych i
        uwierzytelnionych. Jestem tłumaczem przysięgłym, a więc tłumaczę w
        sądzie, na policji, w prokuraturze, w urzędach.
      </p>

      <p>Oferuję tłumaczenia dla firm, osób prywatnych, instytucji, itd.</p>
    </div>
  </Layout>
);

export default Index;
