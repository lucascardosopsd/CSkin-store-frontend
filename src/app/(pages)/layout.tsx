"use client";
import { ReactNode, Suspense } from "react";
import { Box, Flex } from "@chakra-ui/react";
import FilterForm from "../components/forms/FilterForm";
import Navbar from "../components/Navbar";

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
          <Suspense>
            <FilterForm />
          </Suspense>
        </Box>

        {children}
      </Flex>
    </Box>
  );
};

export default Layout;
