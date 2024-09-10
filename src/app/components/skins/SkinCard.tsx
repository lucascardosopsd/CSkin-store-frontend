"use client";
import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { SkinProps } from "../../types/skins";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/Card";
import { formatPrice } from "../../tools/formatPrice";
import { LuShoppingCart } from "react-icons/lu";

interface SkinCardProps {
  skin: SkinProps;
}

const SkinCard = ({ skin }: SkinCardProps) => {
  const { colorMode } = useColorMode();

  return (
    <Card
      m="auto"
      key={skin.id}
      transition="all 0.2s"
      _hover={{
        transform: "scale(1.1)",
      }}
      h={320}
    >
      <CardHeader>
        <Box
          bgGradient={
            colorMode == "light"
              ? "radial(circle, yellow.100, orange.400)"
              : "radial(circle, gray.600, gray.800)"
          }
        >
          <Image src={skin.image} />
        </Box>
      </CardHeader>

      <CardContent>
        <Flex flexDir="column" alignItems="start" h="full">
          <Text
            fontSize={18}
            fontWeight="bold"
            lineHeight={1}
            color="orange.400"
          >
            {skin.name}
          </Text>

          <Text color="GrayText" fontWeight="600">
            {skin.category}
          </Text>

          <Flex>
            <Text fontSize={16}>{formatPrice(skin.price, "pt-BR", "BRL")}</Text>

            <Spacer />

            <Text>Ft/{skin.float}</Text>
          </Flex>
        </Flex>
      </CardContent>

      <CardFooter>
        <Flex>
          <Button
            w="100%"
            variant="ghost"
            bgGradient="linear(to-r, yellow.500, orange.600)"
            color="gray.100"
            fontWeight="bold"
            roundedRight={0}
            roundedTop={0}
          >
            COMPRAR
          </Button>
          <Button
            variant="ghost"
            roundedLeft={0}
            roundedTop={0}
            transition="all 0.2s"
            _hover={{
              bg: "orange.500",
            }}
          >
            <Icon as={LuShoppingCart} fontSize={22} />
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default SkinCard;
