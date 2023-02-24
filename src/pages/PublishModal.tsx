import {
  Box,
  Button,
  Flex,
  IconButton,
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
import Image from "next/image";
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
  const [openEmojiPicker, setOpenEmojiPicker] = useState<boolean>(false);

  const onEmojiClick = (emojiObject: EmojiClickData) => {
    const { emoji, unified } = emojiObject;
    setChosenEmoji({ emoji, unified });
    setOpenEmojiPicker(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      onOverlayClick={() => setOpenEmojiPicker(false)}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody mt="10">
          <Flex>
            <Box position="relative">
              <IconButton
                width="16"
                height="16"
                aria-label="アイキャッチの絵文字"
                backgroundColor="orange.50"
                _hover={{ backgroundColor: "orange.100" }}
                _active={{ backgroundColor: "orange.100" }}
                isActive={openEmojiPicker}
                icon={
                  <Image
                    src={`https://twemoji.maxcdn.com/v/latest/svg/${chosenEmoji.unified}.svg`}
                    alt="アイキャッチ"
                    width={32}
                    height={32}
                  />
                }
                onClick={() => setOpenEmojiPicker((prev) => !prev)}
              />
              {openEmojiPicker && (
                <Box position="absolute" top="4" left="4" zIndex="1">
                  <Picker
                    onEmojiClick={onEmojiClick}
                    emojiStyle={EmojiStyle.TWITTER}
                  />
                </Box>
              )}
            </Box>
          </Flex>
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
