// import React from "react";
// import useGenra, { Ganra } from "./useStateGanra";
// import useData from "./useData";
// import {
//   Button,
//   HStack,
//   Image,
//   Link,
//   List,
//   ListItem,
//   Spinner,
//   Text,
// } from "@chakra-ui/react";
// import imageCrop from "./image-url";
// // import {useGenra} from

import {
  Button,
  HStack,
  List,
  ListItem,
  Spinner,
  Image,
  Heading,
} from "@chakra-ui/react";
import useGenra, { Ganra } from "./useStateGanra";
import imageCrop from "./image-url";

// interface props {
//   onSelectedGenra: (item: Ganra) => void;
// }
// const GenraLIst = ({ onSelectedGenra }: props) => {
//   const { data, isLoadding, error } = useGenra();
//   if (error) return null;
//   if (isLoadding) return <Spinner />;
//   return (
//     <>
//       <List>
//         {data.map((res) => (
//           <ListItem key={res.id}>
//             <HStack paddingY={2}>
//               <Image
//                 boxSize={"32px"}
//                 borderRadius={"8px"}
//                 src={imageCrop(res.image_background)}
//               />
//               <Button
//                 variant={"link"}
//                 onClick={() => onSelectedGenra(res)}
//                 fontSize={"large"}
//               >
//                 {res.name}
//               </Button>
//             </HStack>
//           </ListItem>
//         ))}
//       </List>
//     </>
//   );
// };

// export default GenraLIst;
interface Props {
  onSelectedGenra: (item: Ganra) => void;
  selectedGenra: Ganra | null;
}

const GenraList = ({ selectedGenra, onSelectedGenra }: Props) => {
  const { data, isLoading, error } = useGenra();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <div>
      <Heading fontSize={"2xl"} marginBottom={2}>
        Genres
      </Heading>

      <List>
        {data.map((res) => (
          <ListItem key={res.id}>
            <HStack paddingY={2}>
              <Image
                boxSize={"32px"}
                borderRadius={"8px"}
                objectFit={"cover"}
                src={imageCrop(res.image_background)}
              />
              <Button
                fontWeight={res.id === selectedGenra?.id ? "bold" : "normal"}
                variant={"link"}
                onClick={() => onSelectedGenra(res)}
                fontSize={"large"}
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {res.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenraList;
