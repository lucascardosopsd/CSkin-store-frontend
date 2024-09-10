"use client";
import { categories } from "@/app/constants/categories";
import { filtersValidator } from "@/app/validators/filters";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { z } from "zod";

const FilterForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      orderBy: "",
      category: "",
      startPrice: null,
      endPrice: null,
      float: null,
    },
    resolver: zodResolver(filtersValidator),
  });

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  const handleSubmit = (data: z.infer<typeof filtersValidator>) => {
    replace(`${pathname}`);

    const { orderBy } = data;

    if (orderBy) {
      if (orderBy == "lowestPrice") {
        params.set("orderBy", "price");
        params.set("order", "desc");
      }

      if (orderBy == "highestPrice") {
        params.set("orderBy", "price");
        params.set("order", "asc");
      }

      if (orderBy == "float") {
        params.set("orderBy", "float");
        params.set("order", "asc");
      }
    }

    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        params.set(key, String(value));
      } else {
        params.delete(key);
      }
    });

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Flex flexDir="column" gap={{ base: 5, lg: 2 }}>
        <Flex gap={5}>
          <Select
            placeholder="Ordenar"
            maxW={150}
            id="selectOrder"
            {...form.register("orderBy")}
          >
            <option value="lowestPrice">Menor Preço</option>
            <option value="highestPrice">Maior Preço</option>
            <option value="float">Menor Float</option>
          </Select>

          <Input placeholder="Busque por nome" {...form.register("name")} />
        </Flex>

        <Spacer
          display={{
            base: "none",
            lg: "block",
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
            lg: "row",
          }}
          h={{
            base: "auto",
            lg: "10svh",
          }}
        >
          <Text>Filtros</Text>

          {/* Categories Filter */}

          <Select
            placeholder="Categoria"
            maxW={["full", "full", 150]}
            {...form.register("category")}
          >
            {categories.map((category) => (
              <option value={category.title} key={category.id}>
                {category.title}
              </option>
            ))}
          </Select>

          <Divider
            orientation="vertical"
            h={12}
            display={{ base: "none", lg: "block" }}
          />

          <Divider w="full" display={{ base: "block", lg: "none" }} />

          {/* Start Price Filter */}

          <Text display={{ base: "block", lg: "none" }}>Preço</Text>

          <Controller
            control={form.control}
            name="startPrice"
            render={({ field }) => (
              <NumericFormat
                decimalSeparator=","
                thousandSeparator="."
                valueIsNumericString
                decimalScale={2}
                maxLength={10}
                prefix="R$"
                placeholder="R$0,00"
                onValueChange={(values) => {
                  field.onChange(values.floatValue);
                }}
                value={field.value}
                onBlur={field.onBlur}
                style={{
                  background: "transparent",
                  padding: 7,
                  borderRadius: "5px",
                  borderWidth: "1px",
                  width: "100%",
                }}
              />
            )}
          />

          <Text display={{ base: "none", lg: "block" }}>-</Text>

          {/* End Price Filter */}

          <Controller
            control={form.control}
            name="endPrice"
            render={({ field }) => (
              <NumericFormat
                decimalSeparator=","
                thousandSeparator="."
                valueIsNumericString
                decimalScale={2}
                maxLength={10}
                prefix="R$"
                placeholder="R$1.000,00"
                onValueChange={(values) => {
                  field.onChange(values.floatValue);
                }}
                value={field.value}
                onBlur={field.onBlur}
                style={{
                  background: "transparent",
                  padding: 7,
                  borderRadius: "5px",
                  borderWidth: "1px",
                  width: "100%",
                }}
              />
            )}
          />

          <Divider
            orientation="vertical"
            h={12}
            display={{ base: "none", lg: "block" }}
          />

          <Divider w="full" display={{ base: "block", lg: "none" }} />

          {/* Float filter */}
          <Text display={{ base: "block", lg: "none" }}>Float</Text>

          <Input
            placeholder="Float"
            type="number"
            maxLength={2}
            {...form.register("float")}
          />
        </Box>

        <Button type="submit" bg="orange.500">
          Aplicar
        </Button>
      </Flex>
    </form>
  );
};

export default FilterForm;
