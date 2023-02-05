import { CSSTransition, SwitchTransition } from "react-transition-group";
import React from "react";

interface Props {
  language: "cs" | "pl";
  width: number;
  height: number;
}

const NUMBER_OF_IMAGES = 4;

const ImageCarousel = (props: Props) => {
  const [imageNumber, setImageNumber] = React.useState<number>(1);
  const imageSrc = `/images/image${imageNumber}.${props.language}.jpg`;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setImageNumber((imageNumber) =>
        imageNumber < NUMBER_OF_IMAGES ? imageNumber + 1 : 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const imageTitle =
    "FairTranslations, Mgr. Jolanta Tarabová, " +
    (props.language === "cs"
      ? "Překlady a tlumočení"
      : "Tłumaczenia ustne i pisemne");

  return (
    <figure className="image">
      <SwitchTransition>
        <CSSTransition key={imageSrc} classNames="fade" timeout={300}>
          <img
            key="image"
            src={imageSrc}
            className="rounded-corners-top"
            width={props.width || "100%"}
            height={props.height || "100%"}
            title={imageTitle}
            alt={imageTitle}
          />
        </CSSTransition>
      </SwitchTransition>
    </figure>
  );
};

export default ImageCarousel;
