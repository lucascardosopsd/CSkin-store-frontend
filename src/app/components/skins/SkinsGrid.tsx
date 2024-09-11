"use client";
import { Box, Grid, useColorMode } from "@chakra-ui/react";
import { SkinsListProps } from "../../types/skins";
import SkinCard from "./SkinCard";

const SkinsGrid = ({ skins }: SkinsListProps) => {
  const { colorMode } = useColorMode();

  return (
    <>
      {/* Gradient FX */}
      <Box
        position="absolute"
        top={5}
        left={0}
        h={20}
        w="full"
        zIndex={40}
        pointerEvents="none"
        display={colorMode == "dark" ? "block" : "none"}
        bgGradient="linear(to-b, gray.900, transparent)"
      />

      {/* Gradient FX */}
      <Box
        position="absolute"
        bottom={5}
        left={0}
        h={20}
        w="full"
        zIndex={40}
        pointerEvents="none"
        display={colorMode == "dark" ? "block" : "none"}
        bgGradient="linear(to-t, gray.900, transparent)"
      />

      <Box overflowY="auto" p={5} pb={10}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
            "2xl": "repeat(4, 1fr)",
          }}
          gap={6}
          mx="auto"
        >
          {skins.map((skin, index) => (
            <SkinCard skin={skin} key={skin.id || index} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default SkinsGrid;
