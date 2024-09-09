import {
  Button,
  Flex,
  Image,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Flex padding={5} alignItems="center" borderBottom="1px">
      <Flex alignItems="center" justify="center">
        <Image src="/logo.png" alt="Logo" boxSize="100px" />
        <Text fontSize={22} fontWeight="bold">
          CSkin Store
        </Text>
      </Flex>

      <Spacer />

      <Button size="sm" onClick={toggleColorMode}>
        Tema
      </Button>
    </Flex>
  );
};

export default Navbar;
