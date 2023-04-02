import { MessageResponse } from "@/hooks/useFetchMessages";
import { splitString } from "@/utils/splitString";
import {
  Button,
  Flex,
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

export default function MessagePage({ data }: { data: MessageResponse }) {
  const router = useRouter();
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const [counter, setCounter] = useState(0);
  const [displayMessages, setDisplayMessages] = useState<string[]>([]);
  const splitMessage = splitString(data.message, isLargerThan600 ? 23 : 18);
  const gotoHome = () => router.push("/");

  useEffect(() => {
    if (!splitMessage) return;
    setDisplayMessages((prev) => [...prev, splitMessage[counter - 1]]);
  }, [counter]);

  return (
    <>
      <Head>
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${data.id}`}
        />
        <meta
          property="og:image"
          content={`${
            process.env.NEXT_PUBLIC_OGP_BASEURL
          }/api/og?title=${encodeURIComponent(data.message)}`}
        />
      </Head>
      <Flex minH="100vh" justifyContent="center" alignItems="center">
        <Box w="full" maxW="440" px="4">
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
            mb="4"
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
          <Button
            colorScheme="twitter"
            w="full"
            mb="2"
            onClick={gotoHome}
            leftIcon={<ChakraImage w="6" h="6" src="/twitter.svg" />}
          >
            Twitterでシェアする
          </Button>
          <Button
            bgColor="tomato"
            color="orange.50"
            _hover={{ backgroundColor: "#FF7860" }}
            w="full"
            onClick={gotoHome}
          >
            戻る
          </Button>
        </Box>
      </Flex>
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
