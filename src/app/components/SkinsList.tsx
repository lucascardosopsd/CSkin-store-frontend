"use client";

import {
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

const SkinsList = () => {
  const skins = [
    {
      id: "1446653768",
      name: "M4A4 - Temukau",
      image: "https://i.imgur.com/bucHCP2.png",
      category: "Categoria 1",
      float: 0.2,
      price: 50,
    },
    {
      id: "3146561584",
      name: "M4A4 - Temukau",
      image: "https://i.imgur.com/bucHCP2.png",
      category: "Categoria 1",
      float: 0.2,
      price: 50,
    },
    {
      id: "6892581528",
      name: "M4A4 - Temukau",
      image: "https://i.imgur.com/bucHCP2.png",
      category: "Categoria 1",
      float: 0.2,
      price: 50,
    },
    {
      id: "1638270528",
      name: "M4A4 - Temukau",
      image: "https://i.imgur.com/bucHCP2.png",
      category: "Categoria 1",
      float: 0.2,
      price: 50,
    },
    {
      id: "1807834624",
      name: "M4A4 - Temukau",
      image: "https://i.imgur.com/bucHCP2.png",
      category: "Categoria 1",
      float: 0.2,
      price: 50,
    },
    {
      id: "2951719982",
      name: "M4A4 - Temukau",
      image: "https://i.imgur.com/bucHCP2.png",
      category: "Categoria 1",
      float: 0.2,
      price: 50,
    },
    {
      id: "0086616115",
      name: "M4A4 - Temukau",
      image: "https://i.imgur.com/bucHCP2.png",
      category: "Categoria 1",
      float: 0.2,
      price: 50,
    },
    {
      id: "2329992239",
      name: "M4A4 - Temukau",
      image: "https://i.imgur.com/bucHCP2.png",
      category: "Categoria 1",
      float: 0.2,
      price: 50,
    },
    {
      id: "7849121841",
      name: "M4A4 - Temukau",
      image: "https://i.imgur.com/bucHCP2.png",
      category: "Categoria 1",
      float: 0.2,
      price: 50,
    },
    {
      id: "9313897245",
      name: "M4A4 - Temukau",
      image: "https://i.imgur.com/bucHCP2.png",
      category: "Categoria 1",
      float: 0.2,
      price: 50,
    },
    {
      id: "5268422018",
      name: "M4A4 - Temukau",
      image: "https://i.imgur.com/bucHCP2.png",
      category: "Categoria 1",
      float: 0.2,
      price: 50,
    },
    {
      id: "2762760786",
      name: "M4A4 - Temukau",
      image: "https://i.imgur.com/bucHCP2.png",
      category: "Categoria 1",
      float: 0.2,
      price: 50,
    },
    {
      id: "4295870078",
      name: "M4A4 - Temukau",
      image: "https://i.imgur.com/bucHCP2.png",
      category: "Categoria 1",
      float: 0.2,
      price: 50,
    },
  ];

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      {skins.map((skin) => (
        <Card
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
            <Flex borderTop="1px">
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
  );
};

export default SkinsList;
