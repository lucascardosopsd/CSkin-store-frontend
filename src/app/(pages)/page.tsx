import { Container } from "@chakra-ui/react";
import SkinsList from "../components/SkinsList";
import InputSearch from "../components/InputSearch";

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
      <SkinsList />
    </Container>
  );
}
