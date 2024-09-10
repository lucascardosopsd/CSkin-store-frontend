"use client";
import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Select,
  Spacer,
  Text,
} from "@chakra-ui/react";

const SearchForm = () => {
  return (
    <form onSubmit={() => {}}>
      <Flex
        flexDir="column"
        gap={{
          base: 5,
          md: 0,
        }}
      >
        <Flex gap={5}>
          <Select placeholder="Ordenar" maxW={150}>
            <option value="option1">Menor Preço</option>
            <option value="option2">Maior Preço</option>
            <option value="option3">Menor Float</option>
          </Select>
          <Input placeholder="Busque por nome" />
        </Flex>

        <Spacer
          display={{
            base: "none",
            md: "block",
          }}
        />

        <Box
          borderWidth="1px"
          paddingY={2}
          paddingX={4}
          rounded="lg"
          display="flex"
          alignItems="center"
          gap={2}
          flexDir={{
            base: "column",
            md: "row",
          }}
          h={{
            base: "auto",
            md: "10svh",
          }}
        >
          <Text>Filtros</Text>

          <Select placeholder="Categoria" maxW={["full", "full", 150]}>
            <option value="option1">Categoria 1</option>
            <option value="option2">Categoria 2</option>
            <option value="option3">Categoria 3</option>
          </Select>

          <Divider
            orientation="vertical"
            h={12}
            display={{ base: "none", md: "block" }}
          />

          <Divider w="full" display={{ base: "block", md: "none" }} />

          <Text display={{ base: "block", md: "none" }}>Preço</Text>

          <Input placeholder="R$0,00" maxLength={10} />

          <Text display={{ base: "none", md: "block" }}>-</Text>

          <Input placeholder="R$10,00" maxLength={10} />

          <Divider
            orientation="vertical"
            h={12}
            display={{ base: "none", md: "block" }}
          />

          <Divider w="full" display={{ base: "block", md: "none" }} />

          <Text display={{ base: "block", md: "none" }}>Float</Text>

          <Input placeholder="Float" type="number" maxLength={2} />
        </Box>

        <Button type="submit">Aplicar</Button>
      </Flex>
    </form>
  );
};

export default SearchForm;
