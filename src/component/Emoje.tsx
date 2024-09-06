import React from "react";
import bulls_eye from "../Images/Emojis/bulls-eye.webp";
import thumps from "../Images/Emojis/thumbs-up.webp";
import meh from "../Images/Emojis/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";
interface props {
  rating: number;
}
const Emoje = ({ rating }: props) => {
  const emojes: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "blls_eye emoje" },
    4: { src: thumps, alt: "thumps emoje" },
    5: { src: bulls_eye, alt: "meh emoje" },
  };
  return (
    <>
      <Image {...emojes[rating]} boxSize={"25px"} marginTop={1} />
    </>
  );
};

export default Emoje;
