import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import {  BsChevronDown } from "react-icons/bs";
import usePlatrom, { platforms } from "./usePlatfroms";
import { platform } from "./GageGrid";

interface props {
  onselectedPlatfom: (plat: platforms) => void;
  selectedPlatform: platforms | null;
}
const PlatformSelctor = ({ onselectedPlatfom, selectedPlatform }: props) => {
  const { data } = usePlatrom();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platfoms"}
      </MenuButton>
      <MenuList>
        {data.map((res) => (
          <MenuItem onClick={() => onselectedPlatfom(res)} key={res.id}>
            {res.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelctor;
