import { Container } from "@chakra-ui/react";
import api from "../lib/axios";
import { AxiosSkinsResProps } from "../types/skins";
import SkinsGrid from "../components/skins/SkinsList";
import Paginate from "../components/misc/Paginate";

interface HomeProps {
  searchParams?: {
    name?: string;
    category?: string;
    order?: string;
    orderBy?: string;
    startPrice?: string;
    endPrice?: string;
    float: string;
    page?: string;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const page = Number(searchParams?.page || 1);

  const {
    data: { skins, pages },
  } = await api.get<AxiosSkinsResProps>("/skins", {
    params: {
      ...searchParams,
      take: 2,
      page: page - 1,
    },
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
      <SkinsGrid skins={skins} />

      <Paginate pages={pages} w="full" justifyContent="end" />
    </Container>
  );
}
