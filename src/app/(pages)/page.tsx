import { Container } from "@chakra-ui/react";
import api from "../lib/axios";
import { SkinProps } from "../types/skins";
import SkinsGrid from "../components/SkinsList";

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
      <SkinsGrid skins={data} />
    </Container>
  );
}
