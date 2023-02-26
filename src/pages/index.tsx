import styles from "@/styles/Home.module.css";
import { Title } from "./Title";
import { Action } from "./Action";
import { Box } from "@chakra-ui/react";
import { useFetchMessages } from "@/hooks/useFetchMessages";
import { ChatCard } from "./ChatCard";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  const { res } = useFetchMessages();
  const controls = useAnimationControls();

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
              >
                <ChatCard
                  position="absolute"
                  top={`${Math.floor(Math.random() * 80)}%`}
                  left={`${Math.floor(Math.random() * 80)}%`}
                  data={el}
                />
              </motion.div>
            ))}
        </Box>
        <Action />
      </main>
    </>
  );
}
