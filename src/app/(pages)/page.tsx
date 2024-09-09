import { Container, Flex, Spacer } from "@chakra-ui/react";
import SkinsList from "../components/SkinsList";
import InputSearch from "../components/InputSearch";
import SkinsListOrder from "../components/SkinsListOrder";
import Filters from "../components/Filters";

export default function Home() {
  return (
    <Container
      padding={5}
      maxW="1080px"
      display="flex"
      flexDir="column"
      gap={5}
    >
      <InputSearch />
      <Flex alignItems="center" gap={3}>
        <SkinsListOrder />

        <Spacer />

        <Filters />
      </Flex>
      <SkinsList />
    </Container>
  );
}
