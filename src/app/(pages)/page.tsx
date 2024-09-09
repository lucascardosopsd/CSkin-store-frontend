import { Container, Flex, Spacer } from "@chakra-ui/react";
import SkinsList from "../components/SkinsList";
import InputSearch from "../components/InputSearch";
import SkinsListOrder from "../components/SkinsListOrder";
import Filters from "../components/Filters";

export default function Home() {
  return (
    <Container
      maxW="1080px"
      display="flex"
      flexDir="column"
      gap={2}
      p={5}
      pb={0}
    >
      <Flex gap={5}>
        <SkinsListOrder />
        <InputSearch />
      </Flex>

      <Spacer />

      <Filters />

      <SkinsList />
    </Container>
  );
}
