"use client";

import {
  InputGroup,
  InputRightAddon,
  Input as ChakraInput,
  Icon,
  As,
} from "@chakra-ui/react";

interface InputProps {
  placeholder?: string;
  icon?: As;
}

const Input = ({ placeholder, icon }: InputProps) => {
  return (
    <InputGroup size="sm">
      <ChakraInput placeholder={placeholder} rounded="lg" h={12} />
      {icon && (
        <InputRightAddon h={12} roundedRight="lg">
          <Icon as={icon} />
        </InputRightAddon>
      )}
    </InputGroup>
  );
};

export default Input;
