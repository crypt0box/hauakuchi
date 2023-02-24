import { Button, Flex } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";

type ActionProps = {
  onOpen: () => void;
};

export const Action: React.FC<ActionProps> = ({ onOpen }) => (
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
);
