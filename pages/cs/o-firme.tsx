import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import Layout from '../../components/Layout/Layout';
import {NextPage} from 'next';

const Index: NextPage = () => (
  <Layout language="cs">
    <h1 className="title">O firmě</h1>

    <div className="content">
      <p>Vítejte na mých stránkách,</p>

      <p>jmenuji se Jolanta Tarabová. Překladům a tlumočení se věnuji více než 10 let, a to od roku 1999. V letech
        1999-2006 jsem se této práci věnovala v rámci zaměstnání v českých firmách s polským kapitálem, následně od roku
        2006 na vlastní účet.</p>

      <p>V roce 2006 jsem byla jmenována Krajským soudem v Ostravě soudním tlumočníkem jazyka polského.</p>

      <p>Překlady a tlumočením se zabývám především v těchto jazykových kombinacích:</p>

      <div className="columns is-centered">
        <div className="column is-two-thirds">
          <table className="table is-fullwidth is-narrow is-striped is-hoverable has-shadow rounded-corners">
            <tbody>
            <tr>
              <td><strong>polština</strong></td>
              <td><FontAwesomeIcon icon={faLongArrowAltRight} size="1x"/></td>
              <td><strong>čeština</strong>, ruština, ukrajinština</td>
            </tr>
            <tr>
              <td><strong>čeština</strong></td>
              <td><FontAwesomeIcon icon={faLongArrowAltRight} size="1x"/></td>
              <td><strong>polština</strong>, ruština, ukrajinština</td>
            </tr>
            <tr>
              <td>slovenština</td>
              <td><FontAwesomeIcon icon={faLongArrowAltRight} size="1x"/></td>
              <td>polština</td>
            </tr>
            <tr>
              <td>ruština</td>
              <td><FontAwesomeIcon icon={faLongArrowAltRight} size="1x"/></td>
              <td>čeština, polština</td>
            </tr>
            <tr>
              <td>ukrajinština</td>
              <td><FontAwesomeIcon icon={faLongArrowAltRight} size="1x"/></td>
              <td>čeština, polština</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>Každý překlad považuji za prioritní. Vždy se snažím odevzdat zákazníkovi co nejlepší práci. Proto také v
        případě
        odborných překladů se zákazníkem úzce spolupracuji. Spokojenost zákazníka je pro mě nejdůležitější.</p>

      <p>Poptávky a dotazy týkající se spolupráce můžete posílat sedm dní v týdnu. Na odeslanou poptávku reaguji vždy
        maximálně do hodiny, a to i o víkendech.</p>

      <p>Těším se na spolupráci</p>
    </div>
  </Layout>
);

export default Index;