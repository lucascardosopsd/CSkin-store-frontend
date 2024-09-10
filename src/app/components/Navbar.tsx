"use client";

import {
  Button,
  Flex,
  Image,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();

  const { colorMode } = useColorMode();

  return (
    <Flex padding={5} alignItems="center" borderWidth="1px">
      <Flex alignItems="center" justify="center">
        <Image src="/logo.png" alt="Logo" boxSize="100px" />
        <Text fontSize={22} fontWeight="bold">
          CSkin Store
        </Text>
      </Flex>

      <Spacer />

      <Button size="sm" onClick={toggleColorMode}>
        {colorMode == "dark" ? <LuSun /> : <LuMoon />}
      </Button>
    </Flex>
  );
};

export default Navbar;
