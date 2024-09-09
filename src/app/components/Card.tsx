import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Cardprops extends BoxProps {
  cardHeader?: ReactNode;
  cardContent?: ReactNode;
  cardFooter?: ReactNode;
}

const Card = ({ cardHeader, cardContent, cardFooter, ...rest }: Cardprops) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      display="flex"
      flexDir="column"
      {...rest}
    >
      <Box>{cardHeader}</Box>
      <Box>{cardContent}</Box>
      <Box>{cardFooter}</Box>
    </Box>
  );
};

export default Card;
