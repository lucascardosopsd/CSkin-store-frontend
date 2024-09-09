import { Container } from "@chakra-ui/react";
import SkinsList from "../components/SkinsList";

export default function Home() {
  return (
    <Container padding={5} maxW="1080px">
      <SkinsList />
    </Container>
  );
}
