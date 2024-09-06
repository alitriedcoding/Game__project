import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import Logo from "../Images/Logo/logo.webp";
import ColorMoade from "./ColorMoade";
import InputSearch from "./SeachInput";
interface props {
  onSearch: (seach: string) => void;
}
const Navebare = ({ onSearch }: props) => {
  return (
    <HStack>
      <Image src={Logo} boxSize={"60px"} />
      <InputSearch onSearch={onSearch} />
      <ColorMoade />
    </HStack>
  );
};

export default Navebare;
