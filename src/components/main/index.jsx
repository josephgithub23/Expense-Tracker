import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Summary from "../summary";
import ExpenseView from "../expense-view";

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        ml={"12"}
        mt={"12"}
      >
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button onClick={onOpen} bg={"blue.300"} color={"black"} ml={"4"}>
            Add New Transaction
          </Button>
        </Flex>
      </Flex>

      <Summary isOpen={isOpen} onClose={onClose} />

      <Flex
        w={"full"}
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
        mt={"8"}
      >
        <ExpenseView />
        <ExpenseView />
      </Flex>
    </Flex>
  );
}
