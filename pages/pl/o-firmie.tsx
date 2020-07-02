import React from "react";
import Layout from "../../components/Layout/Layout";
import { NextPage } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const Index: NextPage = () => (
  <Layout language="pl">
    <div className="content">
      <h1 className="title is-3">O firmie</h1>
      <p>Witam na mojej stronie!</p>

      <p>
        Nazywam się Jolanta Tarabova. Tłumaczę od roku 1999. Najpierw w latach
        1999 – 2006 w ramach zatrudnienia w czeskich firmach z polskim
        kapitałem, następnie od roku 2006 na własny rachunek, prowadząc
        działalność gospodarczą. Od roku 2006 jestem także tłumaczem przysięgłym
        języka polskiego w Czechach.
      </p>

      <p>
        Zajmuję się przede wszystkim tłumaczeniami ustnymi i pisemnymi w
        kombinacjach językowych:
      </p>

      <div className="columns is-centered">
        <div className="column is-two-thirds">
          <table className="table is-fullwidth is-narrow is-striped is-hoverable has-shadow rounded-corners">
            <tbody>
              <tr>
                <td>
                  <strong>polski</strong>
                </td>
                <td>
                  <FontAwesomeIcon icon={faLongArrowAltRight} size="1x" />
                </td>
                <td>
                  <strong>czeski</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>czeski</strong>
                </td>
                <td>
                  <FontAwesomeIcon icon={faLongArrowAltRight} size="1x" />
                </td>
                <td>
                  <strong>polski</strong>
                </td>
              </tr>
              <tr>
                <td>słowacki</td>
                <td>
                  <FontAwesomeIcon icon={faLongArrowAltRight} size="1x" />
                </td>
                <td>polski</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Każde tłumaczenie traktuję priorytetowo. Zawsze staram się dostarczyć
        klientowi jak najlepsze tłumaczenie, dlatego też w przypadku
        specjalistycznych tłumaczeń ściśle współpracuję z klientem. Zadowolenie
        klienta jest dla mnie najważniejsze.
      </p>

      <p>
        Współpracuję z firmami w Polsce, posiadam więc konto w polskim banku,
        dzięki czemu można zapłacić za wykonane przeze mnie tłumaczenia wprost
        na polskie konto, co eliminuje koszty przelewów zagranicznych. Faktury
        wystawiam w języku polskim, nie ma więc problemów z ich zaksięgowaniem
        ani nie ma potrzeby ich tłumaczenia.
      </p>

      <p>
        Zapytania ofertowe, pytania dotyczące współpracy mogą Państwo do mnie
        wysyłać 7 dni w tygodniu. Na wysłane zapytanie reaguję maksymalnie do
        godziny, również w weekendy.
      </p>

      <p>
        Pomimo znaczących wahań kursu złotówki do korony jestem w stanie
        zaproponować Państwu dobrą cenę za tłumaczenie wysokiej jakości.
      </p>

      <p>Cieszę się na współpracę</p>
    </div>
  </Layout>
);

export default Index;
