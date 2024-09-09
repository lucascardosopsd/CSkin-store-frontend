import { Container, Spacer } from "@chakra-ui/react";
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
      gap={5}
      p={5}
      overflowY="auto"
      h="88svh"
    >
      <InputSearch />

      <SkinsListOrder />

      <Spacer />

      <Filters />

      <SkinsList />
    </Container>
  );
}
