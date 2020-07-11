import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSkype,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { SwitchTransition, CSSTransition } from "react-transition-group";

interface Props {
  language: "cs" | "pl";
}

const NUMBER_OF_IMAGES = 4;

const Card: React.FC<Props> = (props: Props) => {
  const [imageNumber, setImageNumber] = React.useState<number>(1);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setImageNumber((imageNumber) =>
        imageNumber < NUMBER_OF_IMAGES ? imageNumber + 1 : 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const imageSrc = `/images/image${imageNumber}.${props.language}.jpg`;

  const phone =
    props.language === "cs" ? "+420 737 96 13 76" : "+48 733 669 641";

  const imageTitle =
    "FairTranslations, Mgr. Jolanta Tarabová, " +
    (props.language === "cs"
      ? "Překlady a tlumočení"
      : "Tłumaczenia ustne i pisemne");

  return (
    <div className="card rounded-corners">
      <div className="card-image">
        <figure className="image">
          <SwitchTransition>
            <CSSTransition key={imageSrc} classNames="fade" timeout={300}>
              <img
                key="image"
                src={imageSrc}
                width="100%"
                height="100%"
                className="rounded-corners-top"
                title={imageTitle}
                alt={imageTitle}
              />
            </CSSTransition>
          </SwitchTransition>
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">Mgr. Jolanta Tarabová</p>
            <p className="subtitle is-6">FairTranslations</p>
          </div>
        </div>

        <div className="content">
          <strong>
            {props.language === "cs"
              ? "Jsem plátce DPH"
              : "Jestem płatnikiem VAT"}
          </strong>
          <br />
          <br />
          <div className="table-container">
            <table className="table is-fullwidth is-narrow is-striped">
              <tbody>
                {props.language === "cs" ? (
                  <tr>
                    <th>IČ</th>
                    <td>75089726</td>
                  </tr>
                ) : (
                  <tr>
                    <th>Regon</th>
                    <td>75089726</td>
                  </tr>
                )}
                {props.language === "cs" && (
                  <tr>
                    <th>Datová schránka</th>
                    <td>5qmpu47</td>
                  </tr>
                )}
                <tr>
                  <th>Tel.</th>
                  <td>{phone}</td>
                </tr>
                <tr>
                  <th>E-mail</th>
                  <td>
                    <a href="mailto:info@fairtranslations.com">
                      info@fairtranslations.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>Skype</th>
                  <td>
                    <a href="skype:jola.tarabova?chat">
                      <FontAwesomeIcon icon={faSkype} size="1x" />
                      &nbsp;jola.tarabova
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>WhatsApp</th>
                  <td>
                    <a href="https://wa.me/420737961376">
                      <FontAwesomeIcon icon={faWhatsapp} size="1x" />
                      &nbsp;+420 737 96 13 76
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>Facebook</th>
                  <td>
                    <a href="https://www.facebook.com/FairTranslations/">
                      <FontAwesomeIcon icon={faFacebook} size="1x" />
                      &nbsp;FairTranslations
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          Hakenova 5/725
          <br />
          736 01 Havířov-Město
          <br />
          <br />
          <iframe
            className="rounded-corners"
            src="https://frame.mapy.cz/s/cuvumakuve"
            width="100%"
          />
          <figure className="image">
            <img
              src="/images/sdl-logo.png"
              id="sdl-logo"
              title="I work with SDL*Trados Studio"
              alt="I work with SDL*Trados Studio"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
