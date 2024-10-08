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
import { SkinCardProps } from "../../types/skins";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/Card";
import { formatPrice } from "../../tools/formatPrice";
import { LuShoppingCart } from "react-icons/lu";

const SkinCard = ({ skin }: SkinCardProps) => {
  const { colorMode } = useColorMode();

  return (
    <Card
      m="auto"
      key={skin.id}
      transition="all 0.2s"
      _hover={{
        transform: "scale(1.04)",
        boxShadow: "glow",
      }}
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

      <CardContent
        bgGradient={
          colorMode == "dark"
            ? "linear(to-b, gray.900, gray.700)"
            : "linear(to-b, white, white, gray.100)"
        }
      >
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

          <Flex w="full">
            <Text fontSize={24} fontWeight={600}>
              {formatPrice(skin.price, "pt-BR", "BRL")}
            </Text>

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
