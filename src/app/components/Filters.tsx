"use client";
import { Box, Button, Divider, Select, Text } from "@chakra-ui/react";
import Input from "./Input";
import { LuSearch } from "react-icons/lu";

const Filters = () => {
  return (
    <Box
      border="1px"
      paddingY={2}
      paddingX={4}
      rounded="lg"
      display="flex"
      alignItems="center"
      gap={2}
    >
      <Text>Filtros</Text>

      <Select placeholder="Categoria" maxW={150}>
        <option value="option1">Categoria 1</option>
        <option value="option2">Categoria 2</option>
        <option value="option3">Categoria 3</option>
      </Select>

      <Divider orientation="vertical" h={12} />

      <Input placeholder="R$0,00" maxLength={10} />
      <Text>-</Text>
      <Input placeholder="R$10,00" maxLength={10} />

      <Divider orientation="vertical" h={12} />

      <Input placeholder="Float" type="number" maxLength={2} />

      <Button p={0}>
        <LuSearch size={16} />
      </Button>
    </Box>
  );
};

export default Filters;
