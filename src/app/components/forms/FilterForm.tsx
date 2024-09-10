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
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { z } from "zod";

interface FIlterFormProps {
  afterSubmit?: () => void;
}

const FilterForm = ({ afterSubmit }: FIlterFormProps) => {
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
        params.set("order", "asc");
      }

      if (orderBy == "highestPrice") {
        params.set("orderBy", "price");
        params.set("order", "desc");
      }

      if (orderBy == "float") {
        params.set("orderBy", "float");
        params.set("order", "asc");
      }

      delete data.orderBy;
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
    <form
      onSubmit={form.handleSubmit((data) => {
        handleSubmit(data);
        afterSubmit && afterSubmit();
      })}
    >
      <Flex
        flexDir="column"
        gap={5}
        h="full"
        px={5}
        w={{
          base: "full",
          lg: "300px",
        }}
      >
        <Box display="flex" alignItems="center" gap={2} flexDir="column">
          <Text fontSize={24} fontWeight={600}>
            Filtros
          </Text>

          {/* Order Filter */}
          <Select
            placeholder="Ordenar"
            id="selectOrder"
            {...form.register("orderBy")}
          >
            <option value="">Padrão (Nome)</option>
            <option value="lowestPrice">Menor Preço</option>
            <option value="highestPrice">Maior Preço</option>
            <option value="float">Menor Float</option>
          </Select>

          {/* Name Filter */}

          <Input placeholder="Busque por nome" {...form.register("name")} />

          {/* Categories Filter */}

          <Select
            placeholder="Categoria"
            maxW="full"
            {...form.register("category")}
          >
            <option value="" key="clear">
              Todas
            </option>

            {categories.map((category) => (
              <option value={category.title} key={category.id}>
                {category.title.charAt(0).toUpperCase() +
                  category.title.slice(1)}
              </option>
            ))}
          </Select>

          <Divider w="full" display={{ base: "block", lg: "none" }} />

          {/* Start Price Filter */}

          <Text>Preço</Text>

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

          <Text>Até</Text>

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

          <Divider w="full" />

          {/* Float filter */}
          <Text>Float</Text>

          <Input
            placeholder="0.0"
            type="number"
            maxLength={2}
            {...form.register("float")}
          />
        </Box>

        <Button type="submit" bg="orange.500" color="white" fontWeight={600}>
          Aplicar
        </Button>
      </Flex>
    </form>
  );
};

export default FilterForm;
