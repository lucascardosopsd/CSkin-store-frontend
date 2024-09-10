import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Cardprops extends BoxProps {
  cardHeader?: ReactNode;
  cardContent?: ReactNode;
  cardFooter?: ReactNode;
}

export const Card = ({ children, ...rest }: Cardprops) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      {...rest}
    >
      {children}
    </Box>
  );
};

// CardHeader

interface CardHeaderprops extends BoxProps {
  children: ReactNode;
}

export const CardHeader = ({ children, ...rest }: CardHeaderprops) => {
  return <Box {...rest}>{children}</Box>;
};

// CardContent

interface CardContentprops extends BoxProps {
  children: ReactNode;
}

export const CardContent = ({ children, ...rest }: CardContentprops) => {
  return (
    <Box h="full" p="4" {...rest}>
      {children}
    </Box>
  );
};

// CardFooter

interface CardFooterprops extends BoxProps {
  children: ReactNode;
}

export const CardFooter = ({ children, ...rest }: CardFooterprops) => {
  return (
    <Box borderTopWidth="1px" {...rest}>
      {children}
    </Box>
  );
};
