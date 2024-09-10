"use client";
import { Box, Grid } from "@chakra-ui/react";
import { SkinProps } from "../../types/skins";
import SkinCard from "./SkinCard";

interface SkinsListProps {
  skins: SkinProps[];
}

const SkinsGrid = ({ skins }: SkinsListProps) => {
  return (
    <Box overflowY="auto" mt={2} p={5} pb={10}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={6}
        mx="auto"
      >
        {skins.map((skin) => (
          <SkinCard skin={skin} key={skin.id} />
        ))}
      </Grid>
    </Box>
  );
};

export default SkinsGrid;
