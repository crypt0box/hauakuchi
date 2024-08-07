import { MessageResponse } from "@/hooks/useFetchMessages";
import { splitString } from "@/utils/splitString";
import { CheckCircleIcon } from "@chakra-ui/icons";
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
  useMediaQuery,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { TwitterIntentTweet } from "./TwitterIntentTweet ";

type ChatCardProps = {
  data: MessageResponse;
  isMyMessage?: boolean;
} & FlexProps;

export const ChatCard: React.FC<ChatCardProps> = ({
  data,
  isMyMessage,
  ...rest
}) => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [counter, setCounter] = useState(0);
  const [displayMessages, setDisplayMessages] = useState<string[]>([]);
  const splitMessage = splitString(data.message, isLargerThan600 ? 23 : 16);

  useEffect(() => {
    if (!splitMessage) return;
    setDisplayMessages((prev) => [...prev, splitMessage[counter - 1]]);
  }, [counter]);

  useEffect(() => {
    if (isOpen) {
      setCounter(0);
      setDisplayMessages([]);
    }
  }, [isOpen, data.message]);

  return (
    <>
      <button onClick={onOpen}>
        <Flex gap="2" {...rest}>
          {isMyMessage && <CheckCircleIcon color="teal.400" />}
          <Image
            src={`https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/${data.icon}.svg`}
            alt={`感情アイコン_${data.icon}`}
            width={36}
            height={36}
          />
          <Image
            src={`https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/${data.balloon}.svg`}
            alt={`チャットアイコン_${data.balloon}`}
            width={36}
            height={36}
            style={{
              transform: data.balloon === "1f5e8" ? "scale(-1, 1)" : "none",
            }}
          />
        </Flex>
      </button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          mx={{ base: "4" }}
          maxH="90vh"
          overflowY="scroll"
          css={
            isLargerThan600 && {
              "&::-webkit-scrollbar": {
                width: "10px",
              },
              /* スクロールバーのつまみ（スクロールバーコントロール）を設定 */
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderRadius: "10px",
              },
            }
          }
        >
          <ModalCloseButton />
          <ModalBody mt="8" pb="0">
            <Flex mb="4" justifyContent="center">
              <Image
                src={`https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/${data.icon}.svg`}
                alt={`感情アイコン_${data.icon}`}
                width={32}
                height={32}
              />
            </Flex>
            <Box
              mx="auto"
              position="relative"
              display="inline-block"
              p="7px 10px"
              w="full"
              color="#555"
              background="#e0edff"
              borderRadius="8px"
              justifyContent="center"
              _before={{
                content: '""',
                position: "absolute",
                top: "-28px",
                left: "50%",
                ml: "-15px",
                border: "15px solid transparent",
                borderBottom: "15px solid #e0edff",
              }}
            >
              {displayMessages.length !== 0 &&
                displayMessages.map((message, index) => (
                  <Text key={index} textAlign="center">
                    {message}
                  </Text>
                ))}
              {splitMessage && splitMessage[counter] && (
                <TypeAnimation
                  key={counter}
                  sequence={[
                    splitMessage[counter],
                    () => setCounter((prev) => prev + 1),
                  ]}
                  wrapper="p"
                  cursor={true}
                  speed={65}
                  style={{
                    textAlign: "center",
                  }}
                />
              )}
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              as={TwitterIntentTweet}
              url={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${data.id}`}
              hashtags={["めっちゃはやくちでしゃりべたい"]}
              colorScheme="twitter"
              mb="2"
              w="calc(100vw * 0.9)"
              maxW="400"
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
