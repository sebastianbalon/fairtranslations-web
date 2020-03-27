import React from 'react';
import Layout from '../../components/Layout/Layout';
import { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <Layout>
      <h1 className="title">O firmě</h1>

      <p>Vítejte na mých stránkách,</p>

      <p>
        jmenuji se Jolanta Tarabová. Překladům a tlumočení se věnuji více než 10 let, a to od roku 1999. V letech
        1999-2006 v rámci zaměstnání v českých firmách s polským kapitálem, následně na vlastní účet od roku 2006.

        Jsem absolventkou polské filologie na Jagellonské univerzitě v Krakově.

        V roce 2006 jsem byla jmenována Krajským soudem v Ostravě soudním tlumočníkem jazyka polského.

        Překlady a tlumočením se zabývám především v těchto jazykových kombinacích:

        polština-čeština a čeština-polština, také ze slovenštiny do polštiny.

        Překládám i z ruštiny a ukrajinštiny do češtiny a polštiny, ale také směrem z polštiny a češtiny do ruštiny a
        ukrajinštiny.

        Každý překlad považuji za prioritní. Vždy se snažím odevzdat zákazníkovi co nejlepší práci, proto také v případě
        odborných překladů úzce spolupracuji se zákazníkem. Spokojenost zákazníka je pro mě nejdůležitější.

        Poptávky a dotazy týkající se spolupráce můžete posílat sedm dní v týdnu. Na odeslanou poptávku reaguji vždy
        maximálně do hodiny, a to i o víkendech.
      </p>

      <p>Těším se na spolupráci</p>
    </Layout>
  );
};

export default Index;