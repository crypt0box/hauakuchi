import { MessageResponse } from "@/hooks/useFetchMessages";
import { splitString } from "@/utils/splitString";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Image as ChakraImage,
  Text,
  useMediaQuery,
  Box,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function MessageModal({ data }: { data: MessageResponse }) {
  const router = useRouter();
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const [counter, setCounter] = useState(0);
  const [displayMessages, setDisplayMessages] = useState<string[]>([]);
  const splitMessage = splitString(data.message, isLargerThan600 ? 23 : 18);
  const onCloseDialog = () => router.push("/", undefined, { scroll: false });

  useEffect(() => {
    if (!splitMessage) return;
    setDisplayMessages((prev) => [...prev, splitMessage[counter - 1]]);
  }, [counter]);

  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_OGP_BASEURL}/api/og?title=${data.message}`}
        />
      </Head>
      <Modal isOpen={true} onClose={onCloseDialog}>
        <ModalOverlay />
        <ModalContent mx={{ base: "4" }}>
          <ModalCloseButton />
          <ModalBody mt="8" pb="0">
            <Flex mb="4" justifyContent="center">
              <Image
                src={`https://twemoji.maxcdn.com/v/latest/svg/${data.icon}.svg`}
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
                  style={{
                    textAlign: "center",
                  }}
                />
              )}
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="twitter"
              w="full"
              onClick={onCloseDialog}
              leftIcon={<ChakraImage w="6" h="6" src="/twitter.svg" />}
            >
              Twitterでシェアする
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  data: MessageResponse;
}> = async (context) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/message?id=${context.query.id}`
  );
  const data = (await res.json()) as MessageResponse;
  return {
    props: { data },
  };
};
