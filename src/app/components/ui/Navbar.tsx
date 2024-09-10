"use client";

import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";
import MobileMenu from "../MobileMenu";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();

  const { colorMode } = useColorMode();

  return (
    <Flex
      padding={5}
      alignItems="center"
      borderBottomWidth="1px"
      position="fixed"
      top={0}
      w="full"
      bg="gray.900"
      zIndex={50}
    >
      <Flex alignItems="center" justify="center">
        <Image src="/logo.png" alt="Logo" boxSize="100px" />
        <Flex color="gray.100" gap={1} alignItems="center">
          <Box fontWeight="bold" fontSize={36}>
            CSkin
          </Box>
          <Divider orientation="vertical" h={10} />
          <Box fontSize={24} fontWeight={400}>
            Store{" "}
          </Box>
        </Flex>
      </Flex>

      <Spacer />

      <Flex gap={2} alignItems="center">
        <Button size="sm" onClick={toggleColorMode} h={10} w={10}>
          {colorMode == "dark" ? <LuSun /> : <LuMoon />}
        </Button>

        <Divider
          orientation="vertical"
          h={10}
          display={{
            base: "block",
            lg: "none",
          }}
        />

        <MobileMenu />
      </Flex>
    </Flex>
  );
};

export default Navbar;
