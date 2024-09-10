"use client";
import {
  Flex,
  useColorMode,
  Icon,
  FlexProps,
  Text,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { LuX } from "react-icons/lu";

interface ModalProps extends FlexProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  onSubmit?: () => {};
  submitTitle?: string;
}

const Modal = ({
  children,
  isOpen,
  onClose,
  title,
  onSubmit,
  submitTitle,
  ...rest
}: ModalProps) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      as={motion.div}
      display={{
        base: "flex",
        md: "none",
      }}
      flexDir="column"
      position="absolute"
      top={0}
      left={0}
      h="full"
      w="full"
      zIndex={50}
      bg={colorMode == "dark" ? "gray.900" : "gray.200"}
      p={5}
      animate={isOpen ? "visible" : "hidden"}
      variants={{
        visible: { x: 0, transition: { ease: "easeIn" } },
        hidden: { x: 1000, transition: { ease: "easeOut" } },
      }}
      {...rest}
    >
      <Flex alignItems="center" w="full">
        <Text fontSize={24}>{title}</Text>
        <Spacer />
        <Icon
          as={LuX}
          onClick={onClose}
          fontSize={36}
          _hover={{ transform: "scale(1.4)" }}
          transition="all 0.2s"
          cursor="pointer"
        />
      </Flex>
      {children}

      {onSubmit && (
        <Button
          onClick={() => {
            onSubmit();
            onClose();
          }}
        >
          {submitTitle}
        </Button>
      )}
    </Flex>
  );
};

export default Modal;
