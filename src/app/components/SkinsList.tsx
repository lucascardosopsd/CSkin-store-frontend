"use client";

import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Card from "./Card";
import { LuShoppingCart } from "react-icons/lu";
import { formatPrice } from "../tools/formatPrice";
import { SkinProps } from "../types/skins";

interface SkinsListProps {
  skins: SkinProps[];
}

const SkinsList = ({ skins }: SkinsListProps) => {
  return (
    <Box
      overflowY="auto"
      mt={2}
      pr={{
        base: 0,
        lg: 5,
      }}
      pb={10}
    >
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={6}
        mx="auto"
      >
        {skins.map((skin) => (
          <Card
            m="auto"
            key={skin.id}
            cardHeader={<Image src={skin.image} />}
            cardContent={
              <Flex flexDir="column" padding={4}>
                <Text fontSize={18} fontWeight="bold" lineHeight={1}>
                  {skin.name}
                </Text>

                <Text color="GrayText">{skin.category}</Text>

                <Flex>
                  <Text fontSize={16}>
                    {formatPrice(skin.price, "pt-BR", "BRL")}
                  </Text>

                  <Spacer />

                  <Text>Ft/{skin.float}</Text>
                </Flex>
              </Flex>
            }
            cardFooter={
              <Flex borderTopWidth="1px">
                <Button w="100%" variant="ghost">
                  Comprar
                </Button>
                <Button variant="ghost">
                  <Icon as={LuShoppingCart} />
                </Button>
              </Flex>
            }
          />
        ))}
      </Grid>
    </Box>
  );
};

export default SkinsList;
