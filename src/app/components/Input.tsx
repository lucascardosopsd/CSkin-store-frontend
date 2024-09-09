"use client";

import {
  InputGroup,
  InputRightAddon,
  Input as ChakraInput,
  Icon,
  As,
  InputProps,
} from "@chakra-ui/react";

interface CustomInputProps extends InputProps {
  placeholder?: string;
  icon?: As;
}

const Input = ({ placeholder, icon, ...rest }: CustomInputProps) => {
  return (
    <InputGroup size="sm">
      <ChakraInput placeholder={placeholder} rounded="lg" h={10} {...rest} />
      {icon && (
        <InputRightAddon h={10} roundedRight="lg">
          <Icon as={icon} />
        </InputRightAddon>
      )}
    </InputGroup>
  );
};

export default Input;
