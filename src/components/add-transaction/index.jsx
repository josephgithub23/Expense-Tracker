import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { GlobalContext } from "../../context";

export default function TransactionForm({ onClose, isOpen }) {
  const { formData, setFormData, value, setValue, handleFormSubmit } =
    useContext(GlobalContext);

  function handleSubmit(event) {
    event.preventDefault();
    handleFormSubmit(formData);
  }

  function handleFormChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Add New Transaction</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Enter Description</FormLabel>
                <Input
                  placeContent={"Enter Transaction description"}
                  name="description"
                  type="text"
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Enter Amount</FormLabel>
                <Input
                  placeContent={"Enter Transaction amount"}
                  name="amount"
                  type="number"
                  onChange={handleFormChange}
                />
              </FormControl>
              <RadioGroup value={value} onChange={setValue} mt={"5"}>
                <Radio
                  checked={formData.type === "income"}
                  value="income"
                  colorScheme="blue"
                  name="type"
                  onChange={handleFormChange}
                >
                  Income
                </Radio>
                <Radio
                  checked={formData.type === "expense"}
                  value="expense"
                  colorScheme="red"
                  name="type"
                  onChange={handleFormChange}
                >
                  Expense
                </Radio>
              </RadioGroup>
            </ModalBody>
            <ModalFooter>
              <Button mr={"4"} onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={onClose} type="submit">
                Add
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </form>
    </Modal>
  );
}
