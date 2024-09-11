"use client";
import { Box, Button, Icon, Image, useColorMode } from "@chakra-ui/react";
import { Suspense, useState } from "react";
import { LuFilter } from "react-icons/lu";
import Modal from "./ui/Modal";
import FilterForm from "./forms/FilterForm";

const MobileMenu = () => {
  const { colorMode } = useColorMode();

  const [open, setOpen] = useState(false);

  return (
    <Box role="mobileMenu">
      <Button
        onClick={() => setOpen(true)}
        w={10}
        h={10}
        bg={colorMode == "dark" ? "gray.800" : "gray.200"}
        display={{
          base: "flex",
          lg: "none",
        }}
        role="mobileMenuTrigger"
      >
        <Icon as={LuFilter} />
      </Button>

      <Modal
        onClose={() => setOpen(false)}
        isOpen={open}
        gap={5}
        modalTitle={<Image src="/logo.png" alt="Logo" boxSize="100px" />}
        submitTitle="Aplicar"
      >
        <Suspense>
          <FilterForm afterSubmit={() => setOpen(false)} />
        </Suspense>
      </Modal>
    </Box>
  );
};

export default MobileMenu;
