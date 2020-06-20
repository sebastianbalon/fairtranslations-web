import React from "react";
import Layout from "../../components/Layout/Layout";
import { NextPage } from "next";

const Index: NextPage = () => (
  <Layout language="pl">
    <div className="content">
      <h1 className="title is-3">Cennik</h1>

      <p>
        Cena tłumaczenia zależy od przeznaczenia tekstu: czy jest to tekst
        zwykły, dla potrzeb firm i osób prywatnych, czy też tekst przeznaczony
        jest do opublikowania, druku, zamieszczenia w Internecie itp.
      </p>
      <p>
        Cena tłumaczenia zależy także od terminu, stopnia trudności, ew.
        specjalizacji.
      </p>

      <p>
        Dokładną cenę podaję po przetłumaczeniu, tzn. po stwierdzeniu
        rzeczywistej ilości przetłumaczonego tekstu.
      </p>
      <p>
        Przed wykonaniem tłumaczenia podam Państwu cenę orientacyjną, tzn. cenę
        maksymalną, która w trakcie rozliczenia może być niższa, ale nigdy
        wyższa niż podana cena orientacyjna.
      </p>

      <h2 className="subtitle is-5">Rabaty</h2>
      <p>
        W przypadku stałej współpracy i określonych obrotów miesięcznych oferuję
        rabaty.
      </p>

      <p>
        Jednostka rozliczeniowa to strona 1800 znaków ze spacjami w Wordzie.
      </p>
      <p>Minimalna jednostka rozliczeniowa – 1 strona.</p>

      <p>
        Proszę wysłać zapytanie ofertowe a ja wyślę Państwu wycenę tłumaczenia
        ustnego lub pisemnego.
      </p>
    </div>
  </Layout>
);

export default Index;
