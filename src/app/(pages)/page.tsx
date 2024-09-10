import { Container, Flex } from "@chakra-ui/react";
import SkinsList from "../components/SkinsList";
import SearchForm from "../components/forms/SearchForm";

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
      <Flex
        display={{
          base: "none",
          md: "flex",
        }}
        flexDir="column"
        gap={2}
      >
        {<SearchForm />}
      </Flex>

      <SkinsList />
    </Container>
  );
}
