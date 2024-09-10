import { Button, Flex, Icon, Image, Spacer, Text } from "@chakra-ui/react";
import { SkinProps } from "../types/skins";
import Card from "./Card";
import { formatPrice } from "../tools/formatPrice";
import { LuShoppingCart } from "react-icons/lu";

interface SkinCardProps {
  skin: SkinProps;
}

const SkinCard = ({ skin }: SkinCardProps) => {
  return (
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
            <Text fontSize={16}>{formatPrice(skin.price, "pt-BR", "BRL")}</Text>

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
  );
};

export default SkinCard;
