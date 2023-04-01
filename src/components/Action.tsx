import {
  Button,
  Flex,
  useDisclosure,
  UseDisclosureProps,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { PublishModal } from "./PublishModal";

export const Action: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex justifyContent="center" my="12">
        <Button
          bgColor="tomato"
          color="orange.50"
          _hover={{ backgroundColor: "#FF7860" }}
          leftIcon={<ChatIcon color="orange.50" />}
          onClick={onOpen}
        >
          投稿する
        </Button>
      </Flex>
      <PublishModal key={new Date().toISOString()} {...{ isOpen, onClose }} />
    </>
  );
};
