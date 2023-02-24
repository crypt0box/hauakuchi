import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";
import { EmojiClickData, EmojiStyle } from "emoji-picker-react";
import dynamic from "next/dynamic";
import { useState } from "react";
const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });

type PublishModalProps = Omit<ModalProps, "children">;
type EmojiData = Pick<EmojiClickData, "unified" | "emoji">;

const initialEmoji: EmojiData = {
  emoji: "🙂",
  unified: "1f642",
};

export const PublishModal: React.FC<PublishModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [chosenEmoji, setChosenEmoji] = useState<EmojiData>(initialEmoji);
  console.log("🚀 ~ file: PublishModal.tsx:29 ~ chosenEmoji:", chosenEmoji);

  const onEmojiClick = (emojiObject: EmojiClickData) => {
    const { emoji, unified } = emojiObject;
    setChosenEmoji({ emoji, unified });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody mt="10">
          <Picker onEmojiClick={onEmojiClick} emojiStyle={EmojiStyle.TWITTER} />
        </ModalBody>
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
};
