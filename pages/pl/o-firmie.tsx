import React from 'react';
import Layout from '../../components/Layout/Layout';
import { NextPage } from 'next';

const Index: NextPage = () => (
  <Layout language="pl">
    <h1 className="title">O firmie</h1>

    <p>Witam na mojej stronie!</p>

    <p>
      Nazywam się Jolanta Tarabova. Tłumaczę od roku 1999. Najpierw w latach 1999 – 2006 w ramach zatrudnienia w czeskich firmach z polskim kapitałem, następnie od roku 2006 na własny rachunek, prowadząc działalność gospodarczą. Od roku 2006 jestem także tłumaczem przysięgłym języka polskiego w Czechach. Zajmuję się przede wszystkim tłumaczeniami ustnymi i pisemnymi w kombinacjach językowych:
      polski – czeski
      i
      czeski – polski,
      jak i z języka słowackiego na język polski.

      Tłumaczę również z rosyjskiego i ukraińskiego na język czeski i polski, jak również z języka polskiego i czeskiego na języki rosyjski i ukraiński.

      Każde tłumaczenie traktuję priorytetowo. Zawsze staram się dostarczyć klientowi jak najlepsze tłumaczenie, dlatego też w przypadku specjalistycznych tłumaczeń ściśle współpracuję z klientem. Zadowolenie klienta jest dla mnie najważniejsze.

      Współpracuję z firmami w Polsce, posiadam więc konto w polskim banku, dzięki czemu można zapłacić za wykonane przeze mnie tłumaczenia wprost na polskie konto, co eliminuje koszty przelewów zagranicznych. Faktury wystawiam w języku polskim, nie ma więc problemów z ich zaksięgowaniem ani nie ma potrzeby ich tłumaczenia.

      Zapytania ofertowe, pytania dotyczące współpracy mogą Państwo do mnie wysyłać 7 dni w tygodniu. Na wysłane zapytanie reaguję maksymalnie do godziny, również w weekendy.

      Pomimo znaczących wahań kursu złotówki do korony jestem w stanie zaproponować Państwu dobrą cenę za tłumaczenie wysokiej jakości.
    </p>

    <p>Cieszę się na współpracę</p>
  </Layout>
);

export default Index;