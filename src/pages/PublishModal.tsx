import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";

type PublishModalProps = Omit<ModalProps, "children">;

export const PublishModal: React.FC<PublishModalProps> = ({
  isOpen,
  onClose,
}) => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered>
    <ModalOverlay />
    <ModalContent>
      <ModalCloseButton />
      <ModalBody mt="10">aaa</ModalBody>
      <ModalFooter justifyContent="center">
        <Button
          backgroundColor="tomato"
          color="orange.50"
          _hover={{ backgroundColor: "#FF7860" }}
          mr={3}
          onClick={onClose}
        >
          投稿する
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);
