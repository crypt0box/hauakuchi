import styles from "@/styles/Home.module.css";
import { Title } from "../components/Title";
import { Action } from "../components/Action";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { useFetchMessages } from "@/hooks/useFetchMessages";
import { ChatCard } from "../components/ChatCard";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { useAtomValue } from "jotai/react";
import { newMessageAtom } from "@/atoms";
import Head from "next/head";

export default function Home() {
  const { res } = useFetchMessages();
  const controls = useAnimationControls();
  const newMessage = useAtomValue(newMessageAtom);

  const startAnimation = () =>
    controls.start((i) => {
      const randInt = Math.random() * 2;
      return {
        opacity: [0, 1, 1, 0],
        transition: {
          duration: 5,
          times: [0, 0.1, 0.9, 1],
          delay: i * randInt,
        },
      };
    });

  useEffect(() => {
    startAnimation();
  }, [controls, res]);

  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_API_BASE_URL}/hayakuchi.png`}
        />
      </Head>
      <main className={styles.main}>
        <Title />
        <Box position="relative" h="full">
          {res &&
            res.map((el, index) => (
              <motion.div
                key={el.id}
                custom={index}
                animate={controls}
                onAnimationComplete={() =>
                  index === res.length - 1 && startAnimation()
                }
                style={{ height: "1px" }}
              >
                <ChatCard
                  position="absolute"
                  top={`${Math.floor(Math.random() * 80)}%`}
                  left={`${Math.floor(Math.random() * 80)}%`}
                  data={el}
                />
              </motion.div>
            ))}
          {newMessage && (
            <motion.div
              key={new Date().toISOString()}
              animate={{
                opacity: [0, 1, 1, 0],
                transition: {
                  duration: 5,
                  times: [0, 0.1, 0.9, 1],
                },
              }}
              style={{ height: "1px" }}
            >
              <ChatCard
                position="absolute"
                top={`${Math.floor(Math.random() * 80)}%`}
                left={`${Math.floor(Math.random() * 80)}%`}
                data={newMessage}
              />
            </motion.div>
          )}
        </Box>
        <Action />
        <Flex w="full" py={1} justify="center" gap={2} fontSize={14}>
          <Text>©2023</Text>
          <Link
            color="blue.500"
            href="https://twitter.com/cryptooooon"
            isExternal
          >
            @cryptobox
          </Link>
          <Link
            color="blue.500"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfYg_D3axY6FS-eOi5apKakwcrxKX9sC6RN7oEKieXaaJahDA/viewform?usp=pp_url"
            isExternal
          >
            お問い合わせ
          </Link>
        </Flex>
      </main>
    </>
  );
}
