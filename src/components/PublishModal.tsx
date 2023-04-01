import {
  Box,
  Button,
  Flex,
  FormLabel,
  HStack,
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
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";
import { BALLOON_UNIFIES, FACE_UNIFIES } from "@/constants";
import { RadioChatType } from "./RadioChatType";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useMutateMessage } from "@/hooks/useMutateMessage";
import { messageAtom } from "@/atoms";
import { useSetAtom } from "jotai";

type PublishModalProps = Omit<ModalProps, "children">;

type SubmitData = {
  icon: string;
  balloon: string;
  message: string;
};

const initialSubmitData: SubmitData = {
  icon: "1f600",
  balloon: "1f4ac",
  message: "",
};

export const PublishModal: React.FC<PublishModalProps> = ({
  isOpen,
  onClose,
}) => {
  const setMessage = useSetAtom(messageAtom);
  const { postMessage } = useMutateMessage();
  const [submitData, setSubmitData] = useState<SubmitData>(initialSubmitData);
  const {
    getRootProps: getEmotionRootProps,
    getRadioProps: getEmotionRadioProps,
  } = useRadioGroup({
    name: "emotion",
    defaultValue: "1f600",
    onChange: (unified) => {
      setSubmitData((prev) => {
        return {
          ...prev,
          icon: unified,
        };
      });
    },
  });
  const {
    getRootProps: getBalloonRootProps,
    getRadioProps: getBalloonRadioProps,
  } = useRadioGroup({
    name: "balloon",
    defaultValue: "1f4ac",
    onChange: (unified) => {
      setSubmitData((prev) => {
        return {
          ...prev,
          balloon: unified,
        };
      });
    },
  });
  const balloonGroup = getBalloonRootProps();
  const emotionGroup = getEmotionRootProps();

  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSubmitData((prev) => {
      return {
        ...prev,
        message: e.target.value,
      };
    });
  };

  const onSubmit = () => {
    const { icon, balloon, message } = submitData;
    const newMessage = structuredClone({
      ...submitData,
      id: "0",
      created_at: new Date().toString(),
    });
    setMessage(newMessage);
    postMessage({ icon, balloon, message });
    onClose();
  };

  const validateMessage = (message: string) => {
    if (message.length < 1) return true;
    if (message.length > 801) return true;
    return false;
  };

  const isError = validateMessage(submitData.message);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      isCentered
    >
      <ModalOverlay />
      <ModalContent mx={{ base: "4" }}>
        <ModalCloseButton />
        <ModalBody mt="10" pb="0" userSelect="none">
          <VStack>
            <Box>
              <FormLabel mt="0">
                <Text color="tomato" fontWeight="bold">
                  アイコン
                </Text>
              </FormLabel>
              <HStack justifyContent="center" gap="4" {...emotionGroup}>
                {FACE_UNIFIES.map((value) => {
                  const radio = getEmotionRadioProps({ value });
                  return (
                    <RadioChatType key={value} {...radio}>
                      <Flex w="full" justify="center" position="relative">
                        <Image
                          src={`https://twemoji.maxcdn.com/v/latest/svg/${value}.svg`}
                          alt={`感情アイコン_${value}`}
                          width={32}
                          height={32}
                        />
                        {submitData.icon === value && (
                          <CheckCircleIcon
                            position="absolute"
                            top="2px"
                            right="2px"
                            color="teal.400"
                          />
                        )}
                      </Flex>
                    </RadioChatType>
                  );
                })}
              </HStack>
            </Box>
            <Box>
              <FormLabel mt="2">
                <Text color="tomato" fontWeight="bold">
                  ふきだし
                </Text>
              </FormLabel>
              <HStack justifyContent="center" gap="4" {...balloonGroup}>
                {BALLOON_UNIFIES.map((value) => {
                  const radio = getBalloonRadioProps({ value });
                  return (
                    <RadioChatType key={value} {...radio}>
                      <Flex w="full" justify="center" position="relative">
                        <Image
                          src={`https://twemoji.maxcdn.com/v/latest/svg/${value}.svg`}
                          alt={`チャットアイコン_${value}`}
                          width={32}
                          height={32}
                          style={{
                            transform:
                              value === "1f5e8" ? "scale(-1, 1)" : "none",
                          }}
                        />
                        {submitData.balloon === value && (
                          <CheckCircleIcon
                            position="absolute"
                            top="2px"
                            right="2px"
                            color="teal.400"
                          />
                        )}
                      </Flex>
                    </RadioChatType>
                  );
                })}
              </HStack>
            </Box>
            <Box>
              <FormLabel mt="2">
                <Text color="tomato" fontWeight="bold">
                  しゃべりたいこと
                  <Text ml="1" fontSize="12px" color="gray.500" as="span">
                    ({submitData.message.length}/800)
                  </Text>
                </Text>
              </FormLabel>
              <Textarea
                w="328px"
                h="200px"
                _focus={{
                  boxShadow: "none",
                }}
                onChange={onChangeText}
              />
            </Box>
          </VStack>
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Button
            backgroundColor="tomato"
            color="orange.50"
            _hover={{ backgroundColor: "#FF7860" }}
            onClick={onSubmit}
            isDisabled={isError}
          >
            投稿する
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
