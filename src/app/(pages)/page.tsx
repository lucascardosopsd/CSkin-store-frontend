import { Container, Flex } from "@chakra-ui/react";
import SkinsList from "../components/SkinsList";
import SearchForm from "../components/forms/SearchForm";
import api from "../lib/axios";
import { SkinProps } from "../types/skins";

export default async function Home() {
  const { data } = await api.get<SkinProps[]>("/skins");

  return (
    <Container
      maxW="1080px"
      display="flex"
      flexDir="column"
      gap={2}
      p={5}
      pb={0}
      pt="15svh"
    >
      <Flex
        display={{
          base: "none",
          lg: "flex",
        }}
        flexDir="column"
        gap={2}
      >
        {<SearchForm />}
      </Flex>

      <SkinsList skins={data} />
    </Container>
  );
}
