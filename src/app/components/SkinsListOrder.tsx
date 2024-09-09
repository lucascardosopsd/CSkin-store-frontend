import { Select } from "@chakra-ui/react";

const SkinsListOrder = () => {
  return (
    <Select placeholder="Ordenar" maxW={150}>
      <option value="option1">Menor Preço</option>
      <option value="option2">Maior Preço</option>
      <option value="option3">Menor Float</option>
    </Select>
  );
};

export default SkinsListOrder;
