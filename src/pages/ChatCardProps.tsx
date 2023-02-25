import { MessageResponse } from "@/hooks/useFetchMessages";
import {
  Button,
  Flex,
  FlexProps,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
  Image as ChakraImage,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

type ChatCardProps = {
  message: MessageResponse;
} & FlexProps;

export const ChatCard: React.FC<ChatCardProps> = ({ message, ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen}>
        <Flex gap="2" {...rest}>
          <Image
            src={`https://twemoji.maxcdn.com/v/latest/svg/${message.icon}.svg`}
            alt={`感情アイコン_${message.icon}`}
            width={36}
            height={36}
          />
          <Image
            src={`https://twemoji.maxcdn.com/v/latest/svg/${message.balloon}.svg`}
            alt={`チャットアイコン_${message.balloon}`}
            width={36}
            height={36}
          />
        </Flex>
      </button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody mt="8" pb="0">
            <Text whiteSpace="pre-wrap">{message.message}</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="twitter"
              w="full"
              onClick={onClose}
              leftIcon={<ChakraImage w="6" h="6" src="/twitter.svg" />}
            >
              Twitterでシェアする
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
