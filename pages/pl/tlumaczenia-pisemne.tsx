import React from "react";
import Layout from "../../components/Layout/Layout";
import { NextPage } from "next";

const Index: NextPage = () => (
  <Layout language="pl">
    <div className="content">
      <h1 className="title is-3">Tłumaczenia pisemne</h1>

      <p>
        Oferuję usługi w zakresie tłumaczeń pisemnych – zwykłych i
        uwierzytelnionych.
      </p>

      <h2 className="subtitle is-5">Tłumaczenia pisemne zwykłe</h2>

      <p>
        <strong>Sposoby dostarczenia tekstu do tłumaczenia:</strong>
      </p>
      <ul>
        <li>e-mailem</li>
        <li>pocztą</li>
        <li>osobiście</li>
      </ul>

      <p>
        <strong>Sposoby przekazania gotowego tłumaczenia:</strong>
      </p>
      <ul>
        <li>e-mailem</li>
        <li>pocztą</li>
        <li>osobiście</li>
      </ul>

      <p>
        Jednostka rozliczeniowa – strona znormalizowana - 1800 znaków ze
        spacjami w Wordzie.
      </p>

      <h2 className="subtitle is-5">Tłumaczenia uwierzytelnione</h2>

      <p>Sposób dostarczenia: osobiście lub pocztą.</p>

      <p>
        W celu sporządzenia tłumaczenia przysięgłego potrzebny jest oryginał lub
        notarialnie uwierzytelniona kopia dokumentu. Tłumaczenie jest łączone i
        wiązane sznurkiem z oryginałem lub z notarialnie uwierzytelnioną kopią,
        dołączana jest okrągła pieczęć tłumacza przysięgłego, klauzula tłumacza
        i podpis.
      </p>

      <p>
        Najczęściej sporządza się tłumaczenia przysięgłe następujących
        dokumentów:
      </p>
      <ul>
        <li>akt urodzenia</li>
        <li>akt małżeństwa</li>
        <li>akt zgonu</li>
        <li>wyciągi z rejestru handlowego</li>
        <li>dyplomy</li>
        <li>świadectwa maturalne</li>
        <li>odpis z rejestru przedsiębiorców</li>
        <li>zaświadczenie o numerze identyfikacyjnym REGON</li>
        <li>potwierdzenie zarejestrowania podmiotu jako płatnika VAT</li>
        <li>zaświadczenie o niekaralności</li>
        <li>potwierdzenia wpisów do ewidencji działalności gospodarczej</li>
        <li>akty notarialne</li>
        <li>umowy</li>
        <li>zeznania podatkowe</li>
        <li>i inne</li>
      </ul>

      <p>
        Ponieważ tłumaczenie powinno być na stałe połączone z oryginalnym
        dokumentem, w przypadku niektórych ważniejszych dokumentów zalecam
        sporządzenie kopii uwierzytelnionej przez notariusza, w celu jej
        późniejszego związania z tłumaczeniem, aby byli Państwo wciąż w
        posiadaniu oryginału dokumentu.
      </p>

      <p>
        <strong>Terminy realizacji:</strong>
      </p>
      <ul>
        <li>standardowy</li>
        <li>przyspieszony</li>
        <li>ekspresowy</li>
      </ul>
    </div>
  </Layout>
);

export default Index;
