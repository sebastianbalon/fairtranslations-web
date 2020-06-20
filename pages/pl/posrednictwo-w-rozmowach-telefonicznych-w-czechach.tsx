import React from "react";
import Layout from "../../components/Layout/Layout";
import { NextPage } from "next";

const Index: NextPage = () => (
  <Layout language="pl">
    <div className="content">
      <h1 className="title is-3">
        Pośrednictwo w rozmowach telefonicznych w Czechach
      </h1>

      <p>
        Potrzebują Państwo informacji z czeskich urzędów, firm, ale nie władają
        biegle językiem czeskim? Żaden problem. Zadzwonię zamiast Państwa.
      </p>

      <p>
        Proszę napisać, do kogo, kiedy i w jakiej sprawie potrzebują Państwo
        zadzwonić.
      </p>

      <p>
        Zadzwonię pod wskazany numer, ewentualnie zdobędę numer urzędu lub
        firmy, o który chodzi, a zwięzły wynik rozmowy z najważniejszymi
        informacjami wyślę na Państwa e-mail.
      </p>

      <p>
        Usługa nie jest droga, a minimalna jednostka rozliczeniowa to 10 minut,
        ze względu na czas spędzony na przygotowaniu do rozmowy: zapoznanie się
        z Państwa wskazówkami i przetworzenie ich. Dopiero później dzwonię.
      </p>
    </div>
  </Layout>
);

export default Index;
