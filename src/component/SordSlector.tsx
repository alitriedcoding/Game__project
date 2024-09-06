import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
interface props {
  onSlectedSortOrder: (sort: string) => void;
  SortOrders: string;
}

const SordSlector = ({ onSlectedSortOrder, SortOrders }: props) => {
  const SortOrder = [
    { value: "", Label: "Relevance" },
    { value: "-added", Label: "Data added" },
    { value: "name", Label: "Name" },
    { value: "-released", Label: "Release date" },
    { value: "-metacritic", Label: "Popularity" },
    { value: "-rating ", Label: "Average rating" },
  ];
  const currentSortOrder = SortOrder.find((res) => res.value === SortOrders);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by: {currentSortOrder?.Label || "Relevance"}
      </MenuButton>
      <MenuList>
        {SortOrder.map((res) => (
          <MenuItem
            onClick={() => onSlectedSortOrder(res.value)}
            value={res.value}
            key={res.value}
          >
            {res.Label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SordSlector;
