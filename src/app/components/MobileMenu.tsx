"use client";
import { Button, Icon, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
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
        <Icon as={LuMenu} />
      </Button>

      <Modal
        onClose={() => setOpen(false)}
        isOpen={open}
        gap={5}
        title="Menu"
        submitTitle="Aplicar"
      >
        <FilterForm afterSubmit={() => setOpen(false)} />
      </Modal>
    </>
  );
};

export default MobileMenu;
