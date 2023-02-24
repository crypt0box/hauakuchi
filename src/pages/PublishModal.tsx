import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalProps,
  Textarea,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";
import { EmojiClickData, EmojiStyle } from "emoji-picker-react";
import dynamic from "next/dynamic";
import { useState } from "react";
import Image from "next/image";
import { BALLOON_UNIFIES, FACE_UNIFIES } from "@/constants";
import { RadioChatType } from "./RadioChatType";
const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });

type PublishModalProps = Omit<ModalProps, "children">;
type EmojiData = Pick<EmojiClickData, "unified" | "emoji">;

export const PublishModal: React.FC<PublishModalProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    getRootProps: getEmotionRootProps,
    getRadioProps: getEmotionRadioProps,
  } = useRadioGroup({
    name: "emotion",
    defaultValue: "1f600",
    onChange: console.log,
  });
  const {
    getRootProps: getBalloonRootProps,
    getRadioProps: getBalloonRadioProps,
  } = useRadioGroup({
    name: "balloon",
    defaultValue: "1f4ac",
    onChange: console.log,
  });
  const balloonGroup = getBalloonRootProps();
  const emotionGroup = getEmotionRootProps();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody mt="10" pb="0">
          <VStack gap="2">
            <HStack justifyContent="center" gap="4" {...emotionGroup}>
              {FACE_UNIFIES.map((value) => {
                const radio = getEmotionRadioProps({ value });
                return (
                  <RadioChatType key={value} {...radio}>
                    <Image
                      src={`https://twemoji.maxcdn.com/v/latest/svg/${value}.svg`}
                      alt={`感情アイコン_${value}`}
                      width={32}
                      height={32}
                    />
                  </RadioChatType>
                );
              })}
            </HStack>
            <HStack justifyContent="center" gap="4" {...balloonGroup}>
              {BALLOON_UNIFIES.map((value) => {
                const radio = getBalloonRadioProps({ value });
                return (
                  <RadioChatType key={value} {...radio}>
                    <Image
                      src={`https://twemoji.maxcdn.com/v/latest/svg/${value}.svg`}
                      alt={`チャットアイコン_${value}`}
                      width={32}
                      height={32}
                      style={{
                        transform: value === "1f5e8" ? "scale(-1, 1)" : "none",
                      }}
                    />
                  </RadioChatType>
                );
              })}
            </HStack>
            <Textarea
              w="328px"
              h="200px"
              _focus={{
                boxShadow: "none",
              }}
            />
          </VStack>
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Button
            backgroundColor="tomato"
            color="orange.50"
            _hover={{ backgroundColor: "#FF7860" }}
            onClick={onClose}
          >
            投稿する
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
