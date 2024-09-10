"use client";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import { Box, Flex } from "@chakra-ui/react";
import FilterForm from "../components/forms/FilterForm";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box h="100svh" overflowY="auto">
      <Navbar />

      <Flex h="full">
        <Box
          h="full"
          pt={40}
          borderRightWidth="1px"
          display={{
            base: "none",
            lg: "block",
          }}
        >
          <FilterForm />
        </Box>

        {children}
      </Flex>
    </Box>
  );
};

export default Layout;
