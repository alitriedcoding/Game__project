import React from "react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { platform } from "./GageGrid";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
interface props {
  platforms: platform[];
}
const Platformiconlist = ({ platforms }: props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    Linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platforms) => (
          <Icon
            key={platforms.id}
            as={iconMap[platforms.slug]}
            color={"gray.500"}
          />
        ))}
      </HStack>
    </>
  );
};

export default Platformiconlist;
