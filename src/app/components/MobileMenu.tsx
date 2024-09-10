"use client";
import { Button, Icon, Image, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { LuFilter } from "react-icons/lu";
import Modal from "./ui/Modal";
import FilterForm from "./forms/FilterForm";

const MobileMenu = () => {
  const { colorMode } = useColorMode();

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        w={10}
        h={10}
        bg={colorMode == "dark" ? "gray.800" : "gray.200"}
        display={{
          base: "flex",
          lg: "none",
        }}
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
        <FilterForm afterSubmit={() => setOpen(false)} />
      </Modal>
    </>
  );
};

export default MobileMenu;
