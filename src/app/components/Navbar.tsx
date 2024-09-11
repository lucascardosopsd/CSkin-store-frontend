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
          <Text
            fontWeight="bold"
            fontSize={36}
            display="flex"
            alignItems="center"
          >
            CSkin
            <Text as="span" fontWeight={200}>
              Store
            </Text>
          </Text>

          <Divider orientation="vertical" h={10} />
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
