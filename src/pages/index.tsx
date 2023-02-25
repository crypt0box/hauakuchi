import styles from "@/styles/Home.module.css";
import { Title } from "./Title";
import { Action } from "./Action";
import { Box, useDisclosure } from "@chakra-ui/react";
import { PublishModal } from "./PublishModal";
import { useFetchMessages } from "@/hooks/useFetchMessages";
import { ChatCard } from "./ChatCardProps";

export default function Home() {
  const { res } = useFetchMessages();
  return (
    <>
      <main className={styles.main}>
        <Title />
        <Box position="relative" h="full">
          {res &&
            res.map((el) => (
              <ChatCard
                position="absolute"
                top={`${Math.floor(Math.random() * 80)}%`}
                left={`${Math.floor(Math.random() * 80)}%`}
                key={el.id}
                message={el}
              />
            ))}
        </Box>
        <Action />
      </main>
    </>
  );
}
