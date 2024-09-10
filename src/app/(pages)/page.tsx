import { Container } from "@chakra-ui/react";
import api from "../lib/axios";
import { SkinProps } from "../types/skins";
import SkinsGrid from "../components/skins/SkinsList";

interface HomeProps {
  searchParams?: {
    name?: string;
    category?: string;
    order?: string;
    orderBy?: string;
    startPrice?: string;
    endPrice?: string;
    float: string;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const { data } = await api.get<SkinProps[]>("/skins", {
    params: searchParams,
  });

  return (
    <Container
      maxW="1080px"
      display="flex"
      flexDir="column"
      gap={2}
      p={5}
      pb={0}
      mt="8rem"
    >
      <SkinsGrid skins={data} />
    </Container>
  );
}
