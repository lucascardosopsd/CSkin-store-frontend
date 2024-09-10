"use client";

import {
  Button,
  Divider,
  Flex,
  Image,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";
import MobileMenu from "./MobileMenu";

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

      <Flex gap={2} alignItems="center">
        <Button size="sm" onClick={toggleColorMode} h={10} w={10}>
          {colorMode == "dark" ? <LuSun /> : <LuMoon />}
        </Button>

        <Divider orientation="vertical" h={10} />

        <MobileMenu />
      </Flex>
    </Flex>
  );
};

export default Navbar;
